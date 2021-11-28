function init () {

    const buttons = document.querySelectorAll('.btn')

    buttons.forEach( ele => {
        ele.addEventListener('click',hide)
    })


    function hide (e){
        e.target.previousElementSibling.classList.toggle('hidden')
    }



}
document.addEventListener('DOMContentLoaded', init);