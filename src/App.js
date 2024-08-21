import React from 'react';
import CustomButton from './components/CustomButton';
import Form from './components/Form';

import './App.css';

function App() {

  return (
    <div className="App">
      <h4>Say the vocabulary words.</h4>
      <div className="button-container">
        <CustomButton symbol="square" color="#faaf90"/>
        <CustomButton symbol="circle" color="#69d06d"/>
        <CustomButton symbol="play" color="#ac2020"/>
      </div>
      <Form/>
    </div>
  );
}

export default App;
