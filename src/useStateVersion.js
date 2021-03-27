import React, { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function decrementer() {
    // todo
    setCount(count - 1);
  }

  function incrementer() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1> Sandbox : Reducer</h1>
      <button onClick={incrementer}>+</button>
      {count}
      <button onClick={decrementer}>-</button>
    </div>
  );
}

export default App;
