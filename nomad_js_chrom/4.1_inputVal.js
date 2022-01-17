const loginInput = document.querySelector("#loginForm input");
const loginBtn = document.querySelector("#loginForm button");

function onLoginBtnClick() {
  const userName = loginInput.value;
  console.log(userName);
  if (userName === "") {
    alert("Please write your name😃");
  } else if (userName.length > 15) {
    alert("Your name is too long😅");
  }
}

loginBtn.addEventListener("click", onLoginBtnClick);
