const button = document.querySelector('#remove');

button.addEventListener('click', function (){
    this.parentElement.removeChild(this)
})
