interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "gaga",
  age: 112,
  gender: "M",
};

const sayHi = (person: Human): string => {
  return `hi, ${person.name}(${person.age}, ${person.gender})`;
};

console.log(sayHi(person));

export {};
