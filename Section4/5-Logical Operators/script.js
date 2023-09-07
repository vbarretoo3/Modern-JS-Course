console.log(10 < 20 && 30 > 15);
console.log(10 > 20 || 30 < 15);

// && - Will Return first falsy value or last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && "" && 30;

console.log(a);

const posts = [];
postMessage.length > 0 && console.log(posts[0]);

// || - Will Return first truthy value or last value
let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || "" || undefined;

console.log(b);

// ?? - Will Return the right side operand when the left is null or undefined
let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = "" ?? 30;

console.log(c);
