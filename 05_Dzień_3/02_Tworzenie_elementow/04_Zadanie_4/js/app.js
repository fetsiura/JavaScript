

const btn = document.querySelector('#add')
const number = document.querySelector('#orderId')
const item = document.querySelector('#item')
const quantity = document.querySelector('#quantity')
const body = document.querySelector('tbody')


btn.addEventListener( 'click', function (){
    const tr = document.createElement('tr')


    function creatSome (inputValue){
        const td = document.createElement('td')
        td.innerText = inputValue.value
        tr.appendChild(td)
    }

    creatSome(number)
    creatSome(item)
    creatSome(quantity)

    body.appendChild(tr)

})

