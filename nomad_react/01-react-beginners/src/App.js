import Button from "./Button";
import styled from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  console.log("render");
  return (
    <div>
      <h1 className={styled.title}>Welcome Back!</h1>
      <button onClick={onClick}>Click me</button>
      <div>{counter}</div>
    </div>
  );
}

export default App;
