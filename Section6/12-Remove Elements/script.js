function removeDiv() {
    const div = document.querySelector('.child:last-child');
    div.remove()
}

function removeFirstItem() {
    const ul = document.querySelector('.parent')
    const li = document.querySelector('.child:first-child')

    ul.removeChild(li)
}

// removeDiv()
// removeFirstItem()