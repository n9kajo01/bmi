import React, {useState} from "react";
import './App.css';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    const bmi = weight / (height * height);
    setBmi(bmi);
  }



  return (
    <form onSubmit={handleSubmit}>
      <h3>BMI calculator</h3>
      <div>
        <label>Height (m)</label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
      </div>
      <div>
        <label>Weight (kg)</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <output>{bmi}</output>
      </div>
      <button>Calculate</button>
    </form>
  );
}

export default App;
