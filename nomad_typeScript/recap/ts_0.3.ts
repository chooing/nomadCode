const sayHi = (userName: string, userAge: number, userGender: string): void => {
  console.log(`hi, ${userName}(${userAge}, ${userGender})`);
};
sayHi("name", 999, "F");

export {};
