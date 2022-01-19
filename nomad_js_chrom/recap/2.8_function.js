function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("gaga", 10);
sayHello("mimi", 58);
sayHello("ruru", 24);

//계산기

function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8, 60);
divide(5, 50);

//player object

const player = {
  name: "KIM",
  sayHello: function (otherPersonName) {
    console.log("Hello! " + otherPersonName + " nice to meet you");
  },
};

console.log(player.name);
console.log(player["name"]);
player.sayHello("LEE");
