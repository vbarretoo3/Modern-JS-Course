const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Sorry your operator is invalid please select one of the four options: +, -, *, /";
  }
};

console.log(calculator(10, 5, "&"));
