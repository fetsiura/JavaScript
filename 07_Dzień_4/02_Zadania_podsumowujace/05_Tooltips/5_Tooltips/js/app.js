/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function () {

    const element = document.querySelectorAll('.tooltip');
    console.log(element)


    element.forEach( elemen => {
        const span = document.createElement('span')
        span.classList.add('tooltipText')
        elemen.addEventListener('mouseover', function (e){
            console.log(elemen.innerText)
            span.innerText=elemen.innerText
            elemen.appendChild(span)
        })
        elemen.addEventListener('mouseout', function (e){
            elemen.removeChild(span)
        })
    })





})