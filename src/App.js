import React, { useState } from 'react';
import CustomButton from './components/CustomButton';

import './App.css';

function App() {
  const [selectedRadio, setSelectedRadio] = useState(false)

  return (
    <div className="App">
      <h4>Say the vocabulary words.</h4>
      <div className="button-container">
        <CustomButton symbol="square" color="#faaf90"/>
        <CustomButton symbol="circle" color="#69d06d"/>
        <CustomButton symbol="play" color="#ac2020"/>
      </div>
      <div>
        <textarea
          id="freeform"
          name="freeformInput"
          rows={5}
          cols={60}
        />
      </div>
      <div>
        <form className="radio-form">
          <div className="radio">
            <label>
              <input type="radio" value={true} checked={selectedRadio === true} onClick={()=>setSelectedRadio(true)}/>
              True
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value={false} checked={selectedRadio === false} onClick={()=>setSelectedRadio(false)}/>
              False
            </label>
          </div>
          <button disabled={!selectedRadio} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
