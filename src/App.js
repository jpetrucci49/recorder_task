import React from 'react';
import Recorder from './components/Recorder';
import Form from './components/Form';

import './App.css';

function App() {

  return (
    <div className="App">
      <h4>Say the vocabulary words.</h4>
      <Recorder/>
      <Form/>
    </div>
  );
}

export default App;
