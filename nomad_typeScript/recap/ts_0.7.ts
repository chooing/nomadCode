class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string,age: number,gender: string){
    this.name=name;
    this.age=age;
    this.gender=gender;
  }
}

const user= new Human("lalala",8656,"FM");

const sayHi = (person: Human): string => {
  return `hi, ${person.name}(${person.age}, ${person.gender})`;
};

console.log(sayHi(user));

export {};
