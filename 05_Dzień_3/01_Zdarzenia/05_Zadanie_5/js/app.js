document.addEventListener("DOMContentLoaded", function (){
    const btn = document.querySelectorAll('.btn');

    btn.forEach( ele => {
        let coun =0;
        const  counter = ele.parentElement.querySelector('.counter');
        ele.addEventListener('click', function (){
            coun+=1;
            counter.innerText=coun;
        })
    })

})