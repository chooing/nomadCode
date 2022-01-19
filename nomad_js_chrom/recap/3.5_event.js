const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.innerText = "Clicked!";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone...";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "gold";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("offline");
}
function handleWindowOnline() {
  alert("online");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
