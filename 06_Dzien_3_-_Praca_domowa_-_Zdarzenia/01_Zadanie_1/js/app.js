const content = document.querySelectorAll('.content')
const buttons = document.querySelectorAll('.btn');
console.log(buttons)

buttons.forEach( ele => {
    ele.addEventListener('click', function (ele){
        this.nextElementSibling.classList.toggle('d-none')
    })
})
