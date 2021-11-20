const inputNumber = document.querySelector('#orderId');
const inputName = document.querySelector('#item');
const inputQuantity = document.querySelector('#quantity');

const submit = document.querySelector('#add');
const tbody = document.querySelector('tbody');

submit.addEventListener('click', function (){
    const tr = document.createElement('tr');

    function createTd (input){
        const td = document.createElement('td');
        td.innerText = input.value;
        tr.appendChild(td)
    }
    createTd(inputNumber)
    createTd(inputName)
    createTd(inputQuantity)
    tbody.appendChild(tr)

})