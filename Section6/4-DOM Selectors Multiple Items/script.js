// querySelectorAll()

const listItems = document.querySelectorAll(".item");
console.log(listItems);

listItems.forEach((item, index) => {
  item.style.color = "red";

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerHTML = "Oranges";
  }
});

const listItems2 = document.getElementsByClassName("item");

console.log(listItems2.innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerHTML);
});

const listItems3 = document.getElementsByTagName("li");
