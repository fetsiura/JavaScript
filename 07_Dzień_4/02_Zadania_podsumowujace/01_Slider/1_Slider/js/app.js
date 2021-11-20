const next = document.querySelector("#nextPicture")
const prev = document.querySelector("#prevPicture")
const pictures = document.querySelectorAll('li')

const ul = document.querySelector('ul')
ul.classList.add('slider')

let show =0;
pictures[show].classList.add('visible')

next.addEventListener('click', function (ele){
    pictures[show].classList.remove('visible')
    show++
    if (show>=pictures.length){
        show=0
        pictures[show].classList.add('visible')
    }
    pictures[show].classList.add('visible')
})

prev.addEventListener('click', function (ele){
    pictures[show].classList.remove('visible')
    show--
    if (show<0){
        show=pictures.length-1
        pictures[show].classList.add('visible')
    }
    pictures[show].classList.add('visible')
})

