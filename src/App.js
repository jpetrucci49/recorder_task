import React, { useRef } from 'react';
import Recorder from './components/Recorder';
import Form from './components/Form';

import './App.css';

function App() {
  const textAreaRef = useRef(null);

  const focusTextArea = () => {
    textAreaRef.current.focus();
  }

  return (
    <div className="App">
      <h4>Say the vocabulary words.</h4>
      <Recorder focusTextArea={focusTextArea} />
      <Form textAreaRef={textAreaRef}/>
    </div>
  );
}

export default App;
