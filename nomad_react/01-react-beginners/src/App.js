import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prevVal) => !prevVal);

  function Hello() {
    /* 풀이 설명
    function destroyedFnc() {console.log("destroyed!");}
    function effectFnc() { 
      console.log("created");
      return destroyedFnc;
    }
    useEffect(effectFnc, []);
    */

    useEffect(() => {
      console.log("hi!");
      return () => {
        console.log("bye~");
      };
    }, []);

    return <h1>Hello</h1>;
  }

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
