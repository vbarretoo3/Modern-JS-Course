// for ([initialExpression]; [conditionExpression]; [incrementExpression] statement);

// INITIAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. to execute a `block` of code, using the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log("7 is my lucky number");
//   } else {
//     console.log("number: " + i);
//   }
// }

// for (let i = 0; i < 10; i++) {
//   console.log("Number: " + i);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
const names = ["Brad", "Sam", "Sara", "John", "Tim"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Sara") {
    console.log(`${names[i]} is the best`);
  } else {
    console.log(names[i]);
  }
}
