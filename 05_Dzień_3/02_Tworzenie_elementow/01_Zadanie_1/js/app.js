const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (ele){
    ele.addEventListener('click',function (){
        console.log(this.parentElement.parentElement)
        const toDelete = this.parentElement.parentElement;
        toDelete.parentElement.removeChild(toDelete);
    })
})