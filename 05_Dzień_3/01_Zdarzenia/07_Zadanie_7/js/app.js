document.addEventListener('DOMContentLoaded', function () {
    const box = document.querySelector('.box');
    const body = document.querySelector('body')

    const globY = document.querySelector('#globalY');
    const globX = document.querySelector('#globalX');

    const localY = document.querySelector('#localY');
    const localX = document.querySelector('#localX');


    function showGlobal (event){
        const x = event.clientX;
        const y = event.clientY;
        globX.innerText= x;
        globY.innerText= y;

    }
    function showLocal (event){
        const x = event.offsetX;
        const y = event.offsetY;
        localX.innerText = x;
        localY.innerText = y;
    }

    body.addEventListener('mouseover', showGlobal);
    box.addEventListener('mouseover', showLocal);
});