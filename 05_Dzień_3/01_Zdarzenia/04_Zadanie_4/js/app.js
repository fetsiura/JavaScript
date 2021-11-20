document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.btn');
    const counterShow = document.querySelector('.counter');
    let counter = 0;

    buttons.forEach( ele => {
        ele.addEventListener('click', function (){
            counter+=1;
            counterShow.innerText = counter;
        })
    })

});