import './App.css';
import Form from './Components/Form';
import Comment from './Components/Comment';
import {useState, useEffect} from 'react';
import classify from './Utils/Classify';
import postFeedback from './Utils/PostFeedBack';
import getFeedBack from './Utils/GetFeedBack';

function App() {
  const [form, setForm] = useState({});
  const [classification, setClassification] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFormChange = (event) => {
    const {name, value} = event.target;
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

  useEffect(() => {
    getFeedBack().then((data) => {
      setFeedbacks(data);
    });
    console.log('feedbacks', feedbacks);
  } 
  , []);
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
        <p className="text-white">{JSON.stringify(classification, null, 3)}</p>
      <Comment />
      </div>
    </div>
  );
}

export default App;
