// Insert Adjacent Element Example
function insertElement() {
    const filter = document.querySelector('.parent')
    const h1 = document.createElement('h1')
    h1.textContent = 'insert Adjacenet Element'
    filter.insertAdjacentElement('beforebegin', h1)
}

// Insert Adjacent Text Example
function insertText() {
    const item = document.querySelector('.parent')
    item.insertAdjacentText('afterend', 'insertAdjacentText')
}

// Insert Adjacent HTML Example
function insertHtml() {
    const clearBtn = document.querySelector('.parent')
    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>')
}

// Insert Before Example
function insertBefore() {
    const ul = document.querySelector('.parent')
    const li = document.createElement('li')
    li.textContent = 'insertBefore'
    ul.insertBefore(li)
}

insertElement()
insertText()
insertHtml()
insertBefore()

/*
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
*/