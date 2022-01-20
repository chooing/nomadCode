const clock = document.querySelector("h2#clock");

// function sayHello() {console.log("hello");}
// sayHello();
// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);
