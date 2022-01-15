const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(5, 1);
calculator.minus(5, 1);
calculator.div(10, 2);
calculator.multi(5, 2);
calculator.powerOf(5, 2);
