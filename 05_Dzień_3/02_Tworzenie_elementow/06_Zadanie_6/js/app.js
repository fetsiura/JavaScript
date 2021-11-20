const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const items = document.querySelectorAll('.list-group-item');

items.forEach( ele => {
    ele.addEventListener('click', function (){
        if (this.parentElement === list1) {
            list2.appendChild(this)
        } else {
            list1.appendChild(this)
        }
    })
})
