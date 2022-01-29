import Button from "./Button";
import styled from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styled.title}>Welcome Back!</h1>
      <Button text={"continues"} />
    </div>
  );
}

export default App;
