// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll('.btn');
//     const counterShow = document.querySelector('.counter');
//     let counter = 0;
//
//     buttons.forEach( ele => {
//         ele.addEventListener('click', function (){
//             counter+=1;
//             counterShow.innerText = counter;
//         })
//     })
//
// });



document.addEventListener("DOMContentLoaded", function () {

    const btns = document.querySelectorAll(".btn")
    let counter=0

    btns.forEach( ele => {
        ele.addEventListener( 'click', function (){
            counter++;
            console.log(counter);
        })
    })


})