
const first = document.querySelector('.first').firstElementChild.children[2]

const second = document.querySelector("#second").parentElement.children[3]

const third = document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.firstElementChild.children

const quantity = Math.floor(third/2)
console.log(third[quantity])

const divs = document.querySelector('.forth ').parentElement.querySelectorAll('article>p')[1]
console.log(divs)