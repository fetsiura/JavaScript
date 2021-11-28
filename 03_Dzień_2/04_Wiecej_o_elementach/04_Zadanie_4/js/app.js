
const ulq = document.querySelector('.exercise ul')

ulq.classList.add('menu')

const liq = ulq.querySelectorAll('li')

liq.forEach( ele => {
    ele.classList.add('menuElement')
    ele.classList.remove('error')
})

