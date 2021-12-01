
const next = document.querySelector("#nextPicture")
const prev = document.querySelector("#prevPicture")
const pictures = document.querySelectorAll('li')

const ul = document.querySelector('ul')
ul.classList.add('slider')
let counter =0

pictures[counter].classList.add('visible')


next.addEventListener('click',function (e){
    pictures[counter].classList.remove('visible')
    counter++

    if(counter>5){
        counter=0
    }
    pictures[counter].classList.add('visible')
})
prev.addEventListener('click',function (e){
    pictures[counter].classList.remove('visible')
    --counter

    if(counter<0){
        counter=5
    }
    pictures[counter].classList.add('visible')
})

