document.addEventListener('DOMContentLoaded', function (){
    const divs = document.querySelectorAll('.box');

    divs.forEach( ele => {
        ele.addEventListener('click', function (eve){
            // eve.target.style.backgroundColor="#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor="#" + Math.floor(Math.random()*16777215).toString(16);
        })

    })


})