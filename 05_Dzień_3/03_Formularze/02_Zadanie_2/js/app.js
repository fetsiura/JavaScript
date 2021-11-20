const div =document.querySelector('#invoiceData')
const checkForm= document.querySelector('form').querySelector('#invoice');
div.classList.add('d-none')

checkForm.addEventListener('change', function (e){
    e.preventDefault();
    if (checkForm.checked) {
        div.classList.remove('d-none')
    } else {
        div.classList.add('d-none')
    }
})