const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

const TODOS_KEY = "todos";
let todos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
} //array(text => string) save local

function deleteToDo(event) {
  const deleteLi = event.target.parentElement;
  console.log(deleteLi.id);
  deleteLi.remove();
} //li btn fnc

function paintToDo(newTodoObj) {
  const ElLi = document.createElement("li");
  ElLi.id = newTodoObj.id;

  const ElSpan = document.createElement("span");
  ElSpan.innerText = newTodoObj.text;

  const ElButton = document.createElement("button");
  ElButton.innerText = "❌";
  ElButton.addEventListener("click", deleteToDo);

  ElLi.append(ElSpan, ElButton);
  todoList.append(ElLi);
} //array => li html

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);
  saveToDos();

  todoInput.value = "";
  paintToDo(newTodoObj);
} //form submit fnc
todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  todos = parseTodos;
  parseTodos.forEach(paintToDo);
}

const arr = [1, 2, 3, 4];
console.log(arr);

const newArr = arr.filter((item) => item !== 3);
console.log(newArr);
