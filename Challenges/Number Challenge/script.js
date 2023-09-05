const x = Math.floor(Math.random() * 100 + 1);

const y = Math.floor(Math.random() * 50 + 1);

sum = x + y;
difference = x - y;
product = x * y;
quotient = x / y;
rm = x % y;

sumOutput = `${x} + ${y} = ${sum}`;
differenceOutput = `${x} - ${y} = ${difference}`;
productOutput = `${x} * ${y} = ${product}`;
quotientOutput = `${x} / ${y} = ${quotient}`;
rmOutput = `${x} % ${y} = ${rm}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
