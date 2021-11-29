

document.addEventListener("DOMContentLoaded", function () {


    const  bnts = document.querySelectorAll('.btn')

    bnts.forEach( ele => {
        ele.addEventListener('click', function (){
           ++(this.parentElement.firstElementChild.firstElementChild.innerText);

        })
    })
})