


const btns = document.querySelectorAll('.btn')

btns.forEach( ele => {
    ele.addEventListener('click', function (){
        const toDelete = this.parentElement.parentElement
        toDelete.parentElement.removeChild(toDelete)
    })
})