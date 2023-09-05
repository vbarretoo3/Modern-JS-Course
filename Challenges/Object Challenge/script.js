// Step 1
const library = [
  {
    title: "The Republic",
    author: "Plato",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Metro 2033",
    author: "Dmitry Glukhovsky",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Prince",
    author: "Nicolau",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];

// step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
