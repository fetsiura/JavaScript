function init () {

    const buttons = document.querySelectorAll('.btn')

    buttons.forEach( ele => {
        ele.addEventListener('click',change)
    })




    function change(e){
        e.target.parentElement.style.backgroundColor ="#" + Math.floor(Math.random()*16777215).toString(16);
    }

}
document.addEventListener('DOMContentLoaded', init);