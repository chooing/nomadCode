const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

const TODOS_KEY = "todos";
const todos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
}

function paintToDo(newTodo) {
  const ElLi = document.createElement("li");

  const ElSpan = document.createElement("span");
  ElSpan.innerText = newTodo;

  const ElButton = document.createElement("button");
  ElButton.innerText = "❌";
  ElButton.addEventListener("click", deleteToDo);

  ElLi.append(ElSpan, ElButton);
  todoList.append(ElLi);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todos.push(newTodo);
  saveToDos();

  todoInput.value = "";
  paintToDo(newTodo);
}
todoForm.addEventListener("submit", handleToDoSubmit);
