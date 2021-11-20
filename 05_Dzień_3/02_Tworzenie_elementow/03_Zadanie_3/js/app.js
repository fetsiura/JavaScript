const add = document.querySelector('#add');
const coun = document.querySelector('.list-group-item')

let counter =1;

add.addEventListener('click', function (){
    counter++;
    const elem = coun.cloneNode(true);
    coun.parentElement.appendChild(elem);
    coun.innerText=counter+' element'

})