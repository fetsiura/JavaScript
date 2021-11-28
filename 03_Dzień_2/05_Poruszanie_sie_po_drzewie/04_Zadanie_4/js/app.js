function init () {

    const divs = document.querySelectorAll('.listContainer');


    divs.forEach( ele => {
        ele.addEventListener('mouseover', changeColor)
    })

    function changeColor (e) {
        e.firstElementChild.firstElementChild.style.backgroundColor='red'
    }


    // divs[0].firstElementChild.firstElementChild.style.backgroundColor='red'
}
document.addEventListener('DOMContentLoaded', init);