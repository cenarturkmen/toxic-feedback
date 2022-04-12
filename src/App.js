import "./App.css";
import Form from "./Components/Form";
import Comment from "./Components/Comment";
import { useState, useEffect } from "react";
import classify from "./Utils/Classify";
import postFeedback from "./Utils/PostFeedBack";
import getFeedBack from "./Utils/GetFeedBack";
import MoodBadIcon from "@mui/icons-material/MoodBad";

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
    let currentdate = new Date();
    let datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear();
    event.preventDefault();
    if (form.name && form.email && form.message) {
      let predictions = await classify(form.message);
      if (predictions.length > 0) {
        await postFeedback(
          form.name,
          form.email,
          form.message,
          predictions,
          datetime
        );
      }
    }
  };

  const getFeedbacks = async () => {
    let response = await getFeedBack();
    let data = await response.json();
    setFeedbacks(data);
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="flex justify-center">
      <div>
        <h1 className=" text-xl py-8 text-white text-center">
          <MoodBadIcon className="mr-2" />
          Send me your toxic feedback
        </h1>
        <Form
          handleSend={handleSend}
          handleFormChange={handleFormChange}
          className=""
        />
        {feedbacks &&
          feedbacks.map((feedback, key) => (
            <Comment
              key={key}
              name={feedback.name}
              email={feedback.email}
              message={feedback.message}
              toxicity={JSON.parse(feedback.result)}
              date={feedback.date}
              className=""
            />
          ))}
      </div>
    </div>
  );
}
export default App;
