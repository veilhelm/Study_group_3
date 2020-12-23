import Button from './components/Button';
import Form from './components/Form';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState(true);
  const updateState = () => {
    setState((state) => !state);
  };
  return (
    <div className="App">
      <div className="hero-container">
        <div className="title">
          <h1>this is my first react app</h1>
          <span>what a great time to be alive</span>
          <Button onClick={updateState} text="take me home"></Button>
        </div>
        {state ? <Form></Form> : null}
      </div>
    </div>
  );
}

export default App;
