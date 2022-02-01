import { useEffect, useState } from "react";

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDoArr, setToDoArr] = useState([]);

  const onInputChange = (event) => setToDo(event.target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    } else {
      const date = new Date();
      const toDos = { id: date.getTime(), text: toDo };
      setToDoArr((currnetToDoArr) => [toDos, ...currnetToDoArr]);
      setToDo("");
    }
  };

  const onBtnClick = (event) => {
    const thisLi = event.target.parentNode;
    setToDoArr((currnetToDoArr) =>
      currnetToDoArr.filter((val) => val.id.toString() !== thisLi.id)
    );
  };

  return (
    <div>
      <h3>
        오늘의 할일 <span>{toDoArr.length}</span>
      </h3>
      <ul>
        {toDoArr.map((todos) => (
          <li key={todos.id} id={todos.id}>
            {todos.text} <button onClick={onBtnClick}>X</button>
          </li>
        ))}
      </ul>
      <form onSubmit={onFormSubmit}>
        <input
          value={toDo}
          onChange={onInputChange}
          type="text"
          placeholder="할 일을 입력하세요."
        />
        <button>등록</button>
      </form>
    </div>
  );
}

export default ToDo;
