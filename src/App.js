import "./App.css";
import Counter from "./Counter";
import React, { useState } from "react";
import Sample from "./Sample";

function App() {
  const [Count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="App">
      React Starter Page {Count}
      <div>
        <button onClick={handleIncrement}>Increase</button>
      </div>
      <Sample />
      <Counter />
    </div>
  );
}

export default App;
