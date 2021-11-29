const ul = document.querySelectorAll('.list-group-item')
const button = document.querySelector('.btn');


button.addEventListener('click', function (){
    ul.forEach(el => {
        el.remove();
    })
})