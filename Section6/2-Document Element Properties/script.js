let output;

output = document.all;
output = document.all[4];
output = document.all.length;

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;
// document.forms[0].id = 'new-id

output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';

output = document.images;
// output = document.images[0];
// output = document.images[0].src;

document.body.children.forEach((children) => console.log(children));

console.log(output);
