document.addEventListener("DOMContentLoaded", function () {

    const divs =document.querySelectorAll('button')
    const  container = document.querySelector('#container')

    divs.forEach( ele => {
        ele.addEventListener('click', function (e){
            e.preventDefault()
           const span = document.createElement('li')
            span.innerText=ele.dataset.text
            container.appendChild(span)
        })
    })



})