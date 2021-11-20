document.addEventListener("DOMContentLoaded", function () {

const span = document.createElement('span')

const divs= document.querySelectorAll('.color')


divs.forEach( ele => {
    ele.addEventListener('mouseover', function (e){
        e.preventDefault()
        e.target.style.color="#" + Math.floor(Math.random()*16777215).toString(16);
        span.innerText=ele.dataset.text
        ele.appendChild(span)
    })
    ele.addEventListener('mouseout', function (e){
        e.preventDefault()
        ele.removeChild(span)
    })
})


    console.log("DOM fully loaded and parsed!"); });