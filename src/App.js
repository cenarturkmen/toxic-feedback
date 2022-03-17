import "./App.css";
import Form from "./Components/Form";
import Comment from "./Components/Comment";
import { useState, useEffect } from "react";
import classify from "./Utils/Classify";
import postFeedback from "./Utils/PostFeedBack";
import getFeedBack from "./Utils/GetFeedBack";

function App() {
  const [form, setForm] = useState({});
  const [feedbacks, setFeedbacks] = useState();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSend = async (event) => {
    event.preventDefault();
    if (form.name && form.email && form.message) {
      let predictions = await classify(form.message);
      if (predictions.length > 0) {
        await postFeedback(form.name, form.email, form.message, predictions);
      }
    }
  };

  // write a function that will get the feedbacks from the server and set them to the state of feedbacks
  // use utils/getFeedBack to get the feedbacks from the server
  const userFeedbacks = async () => {
    let feedbacks2 = await getFeedBack();
    let response =  await feedbacks2.text();
    setFeedbacks(JSON.parse(response));
  }

  useEffect( () => {
    userFeedbacks()
  }, [])

  return (
    <div className="flex justify-center">
      <div>
        <h1 className=" text-xl py-8 text-white text-center">
          Send me your toxic feedback
        </h1>
        <Form
          handleSend={handleSend}
          handleFormChange={handleFormChange}
          className=""
        />
        { }
        {feedbacks && feedbacks.data.map((feedback, key) => (
          <Comment
            key = {key}
            name={feedback.Name}
            email={feedback.Mail}
            message={feedback.Message}
            toxicity = {JSON.parse(feedback["Toxic Results"])}
            className=""
          />
        ))}
        
      </div>
    </div>
  );
}
export default App;
