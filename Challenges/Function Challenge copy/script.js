// Challenge 1
const getCelsius = (tempF) => ((tempF - 32) * 5) / 9;

console.log(`The temperature is  ${getCelsius(112)}\xB0C`);

// Challenge 2
const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
};

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
((width, length) => {
  const area = width * length;
  console.log(
    `The area of rectangle with a length ${length} and a width ${width} is ${area}`
  );
})(20, 10);
