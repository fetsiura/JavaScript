document.addEventListener("DOMContentLoaded", function () {


    const generalPrice = document.querySelector('.order-info')
    const form = document.querySelector('form')
    const allAddBtn = document.querySelector('#allAddition')
    const clearAllAddBtn = document.querySelector('#clearAllAddition')
    const submitBtn =document.querySelector('#submit')

    const addPrice = document.querySelector('#price')
    const addPosition = document.querySelector('.card-title')
    const input = document.querySelectorAll('.form-check-input')

    let mainPriceSum = 0.0;
    let addPriceSum =0.0;


    form.addEventListener('change', addAdditions)
    allAddBtn.addEventListener('click', addAllAdditions)
    clearAllAddBtn.addEventListener('click', removeAllAdditions)
    submitBtn.addEventListener('click',showKlientCheck)

    function showKlientCheck(e){
        e.preventDefault()
        generalPrice.innerText="Do zapłaty: "+(addPriceSum+35)+'zł'

    }

    function removeAllAdditions(e){
        e.preventDefault()
        input.forEach( ele => {
            ele.checked =''
        })
        addPriceSum=0.0
        removeAdditionalList()
        addPrice.innerText='0.00zł'
    }

    function addAllAdditions(e){
        e.preventDefault()
        addPriceSum=0.0
        removeAdditionalList()
        input.forEach( ele => {
            ele.checked ='v'
            addPriceSum+=parseFloat(ele.dataset.price)
            addElementToAdditionalList(ele.id)
        })
        addPrice.innerText = addPriceSum.toPrecision(3)+' zł'

    }

    function addAdditions(e){
        e.preventDefault()
        if(e.target.checked){
            addPriceSum+= parseFloat(e.target.dataset.price)
            addElementToAdditionalList(e.target.id)
        } else {
            addPriceSum-= parseFloat(e.target.dataset.price)
            removeElementFromAdditionalList(e.target.id)
        }

        addPrice.innerText = addPriceSum.toPrecision(3)+' zł'
    }


    function addElementToAdditionalList (id) {
        const li = document.createElement('li')
        li.innerText = id
        li.classList.add('additionals')
        addPosition.appendChild(li)

    }

    function removeElementFromAdditionalList(id){
        addPosition.querySelectorAll('li').forEach( ele => {
            if(ele.innerText === id){
                addPosition.removeChild(ele)
            }
        })
    }

    function removeAdditionalList(){
        addPosition.querySelectorAll('li').forEach(ele => {
            ele.parentElement.removeChild(ele)
        })
    }

});
