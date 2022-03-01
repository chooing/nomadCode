const sayHi = (
  userName: string,
  userAge: number,
  userGender: string
): string => {
  return `hi, ${userName}(${userAge}, ${userGender})`;
};

console.log(sayHi("name585", 555, "F"));

export {};
