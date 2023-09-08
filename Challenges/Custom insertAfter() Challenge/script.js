function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

const li = document.createElement('li')
li.textContent = 'Insert Me After'

const firstItem = document.querySelector('.child')

insertAfter(li, firstItem)