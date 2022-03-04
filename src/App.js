import './App.css';
import Form from './Components/Form';
import {useState, useEffect} from 'react';
import classify from './Utils/Classify';

function App() {
  const [form, setForm] = useState({});
  const [classification, setClassification] = useState('');

  const handleFormChange = (event) => {
    const {name, value} = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSend = async (event) => {
    event.preventDefault();
    let results = classify(form.message).then(function (results) {
      setClassification(results);
      console.log(results);
    });
  };

  // useEffect(() => {
  //   setClassification(classify(form.message));
  //   console.log(classification);
  // }, [form.message]);

  console.log(form);
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
      </div>
    </div>
  );
}

export default App;
