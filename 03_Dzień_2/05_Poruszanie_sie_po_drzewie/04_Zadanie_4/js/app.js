function init () {

    const divs = document.querySelectorAll('.listContainer');

    divs.forEach( ele => {
        ele.addEventListener('mouseover', changeColor)
    })

    function changeColor (e) {
        greenColor(this)
       this.firstElementChild.firstElementChild.style.backgroundColor='red'
       this.firstElementChild.lastElementChild.style.backgroundColor='blue'
    }

    function greenColor (e){
        e.firstElementChild.querySelectorAll('li').forEach( ele => {
            ele.style.backgroundColor='green'
        })

    }
    // divs[0].firstElementChild.firstElementChild.style.backgroundColor='red'
}
document.addEventListener('DOMContentLoaded', init);