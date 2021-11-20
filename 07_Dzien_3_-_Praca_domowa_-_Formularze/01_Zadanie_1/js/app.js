document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form')
    const additionsPrice = document.querySelector('#price')
    const placeToAddition =document.querySelector('.card-title')
    const buttonBuying= document.querySelector('#submit')
    const buttonClearAll= document.querySelector('#clearAllAddition')
    const buttonCheckAll=document.querySelector('#allAddition')
    const placeToMainPrice=document.querySelector('.order-info')
    const input = document.querySelectorAll('.form-check-input')


    let priceAdd=0.0;
    let priceMain=35.0;


    form.addEventListener('change', changeAddition)
    buttonBuying.addEventListener('click', buy)
    buttonClearAll.addEventListener('click', clearAll)
    buttonCheckAll.addEventListener('click', checkAll)

    function checkAll(e){
        e.preventDefault()
        placeToAddition.textContent=''
        additionsPrice.innerText='0.00 zł'
        priceAdd=0.0
        input.forEach(ele =>{
            ele.checked='v'
            createAdditionList(ele.id)
            priceAdd+=parseFloat(ele.dataset.price)
        })
        additionsPrice.innerText=priceAdd.toPrecision(3)+' zł'
    }

    function clearAll(e){
        e.preventDefault()
        input.forEach(ele =>{
            ele.checked=''
        })
        placeToAddition.textContent=''
        additionsPrice.innerText='0.00 zł'
        priceAdd=0.0
    }

    function buy(e){
        e.preventDefault()
        placeToMainPrice.textContent=''
        const h5 = document.createElement('h5')
        h5.innerText='Do zapłaty: '+(priceMain+priceAdd).toPrecision(3)+' zł'
        //// style
        placeToMainPrice.appendChild(h5)
    }


    function changeAddition (e) {
        if (e.target.checked){
            priceAdd+=parseFloat(e.target.dataset.price)
            createAdditionList(e.target.id)
            console.log(e.target.id)
        } else {
            priceAdd-=parseFloat(e.target.dataset.price)
            deleteAdditionList(e.target.id)
        }
        additionsPrice.innerText=priceAdd.toPrecision(3)+' zł'

    }


    function createAdditionList (name){
        const li = document.createElement('li')
        li.innerText=name
        placeToAddition.appendChild(li)
    }

    function deleteAdditionList (name){
        const findLi = document.querySelectorAll('li');
        findLi.forEach(function (element) {
            if (element.innerText === name) {
                element.remove()
            }
        })
    }


});
