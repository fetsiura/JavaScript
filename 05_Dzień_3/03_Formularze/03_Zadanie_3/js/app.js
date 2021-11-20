const imgs = document.querySelectorAll('.page-header img');
const selected = document.querySelector('select.form-control')

imgs.forEach( ele => {
    if (ele.alt !== 'Windows'){
        ele.classList.add('d-none')
    }
})
const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const val = selected.value;
    imgs.forEach( elem => {
        if (elem.alt === val){
            elem.classList.remove('d-none')
        }else {
            elem.classList.add('d-none')
        }
    })

})