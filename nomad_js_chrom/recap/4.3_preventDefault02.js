const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

const link = document.querySelector("a");

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("clicked");
}

link.addEventListener("click", handleLinkClick);
