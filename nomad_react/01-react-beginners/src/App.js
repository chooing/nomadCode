import Button from "./Button";
import styled from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  //click=>counter++

  const [keyeord, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  //serch input onchange

  useEffect(() => {
    console.log("I run only once.");
    //console.log("call API");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
    //if (keyeord !== "" && keyeord.length > 5) { console.log("i search", keyeord);}
  }, [keyeord]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyeord, counter]);

  //useEffect

  return (
    <div>
      <h1 className={styled.title}>Welcome Back!</h1>
      <input
        value={keyeord}
        onChange={onChange}
        type="text"
        placeholder="search here"
      />
      <p>{counter}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
