document.addEventListener("DOMContentLoaded", function () {

    const button1 = document.querySelector('#button-1')
    const button2 = document.querySelector('#button-2')
    const button3 = document.querySelector('#button-3')
    const shopping =document.querySelector('#shopping-list')

    button1.addEventListener('click', function (e){

                const span = document.createElement('li')
                e.preventDefault()
                span.innerText='chleb'
                shopping.appendChild(span)
            })

    button2.addEventListener('click', function (e){
                e.preventDefault()
        shopping.removeChild(shopping.lastElementChild)
            })

    button3.addEventListener('click', function (e){
                e.preventDefault()
                const clone = shopping.children[1]
                const toClone=clone.cloneNode(true)
                console.log(clone)
        shopping.appendChild(toClone)
            })


});