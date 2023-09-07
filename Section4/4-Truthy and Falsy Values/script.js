// Falsy Values:
// - false
// - 0
// - '' or "" (empty string)
// - null
// - undefined
// NaN

const email = "test@test.com";

if (email) {
  console.log("you passed in an email");
}

const x = false;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

// checking for empty arrays
const posts = [];

if (posts.length) {
  console.log("List Posts");
} else {
  console.log("No Posts to List");
}

// Checking for empty objects
const user = {};

if (Object.keys(user).length) {
  console.log("list user");
} else {
  console.log("no user");
}

// Loose Equality (==)
console.log(false == 0);
console.log("" === 0);
console.log(null === undefined);
