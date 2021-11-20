const width = document.querySelector('#windowWidth');
const height = document.querySelector('#windowHeight');
resize();
window.addEventListener('resize', function (){
    resize()
})

function resize () {
    const winWid = window.innerWidth
    const winHei = window.innerHeight
    width.innerText = winWid;
    height.innerText = winHei;
}

