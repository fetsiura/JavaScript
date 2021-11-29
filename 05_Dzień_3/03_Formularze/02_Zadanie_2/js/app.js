

const faktura = document.querySelector('#invoiceData')
faktura.classList.add('d-none')

const invoiceCheck = document.querySelector('#invoice')


invoiceCheck.addEventListener('change',function (e){
    e.preventDefault()
    if(invoiceCheck.checked) {
        faktura.classList.remove('d-none')
    }
    if(!invoiceCheck.checked){
        faktura.classList.add('d-none')
    }
})

