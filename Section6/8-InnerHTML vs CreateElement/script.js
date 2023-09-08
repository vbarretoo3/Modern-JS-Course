// Quick and dirty
function createListItem(item) {
    const li = document.createElement('li');
    li.innerHTML = item

    document.querySelector('.parent').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red'

    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-xmark'

    button.appendChild(icon)
    li.appendChild(button)

    document.querySelector('.parent').appendChild(li);
}

createListItem('Eggs')
createNewItem('Cheese')