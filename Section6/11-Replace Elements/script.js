function replaceFirstItem() {
    const firstItem = document.querySelector('.child:first-child')
    const li = document.createElement('li')
    li.textContent = 'Replaced First'

    firstItem.replaceWith(li)
}

function replaceSecondItem() {
    const secondItem = document.querySelector('.child:nth-child(2)')

    secondItem.outerHTML = '<li>Replaced Second</li>'
}

function replaceAllItems() {
    const lis = document.querySelectorAll('div.child')
    lis.forEach((item, index) => 
        item.outerHTML = '<li>Replace all</li>'
    )
}

function replaceChild() {
    const header = document.querySelector('header')
    const h1 = document.querySelector('header h1')

    const h2 = document.createElement('h2')
    h2.id = 'app-title'
    h2.textContent = 'Shopping list'
    header.replaceChild(h2, h1)
}

// replaceFirstItem()
// replaceSecondItem()
// replaceAllItems()
replaceChild()