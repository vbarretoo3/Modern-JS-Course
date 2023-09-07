let output;

const parent = document.querySelector(".parent");

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerHTML = "Child One";
output = parent.childNodes[3].style.color = "red";

output = parent.firstChild;
output = parent.lastChild;

output = parent.lastChild.textContent = "Hello";

// Parent node

const child = document.querySelector(".child");

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Sibilings
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
