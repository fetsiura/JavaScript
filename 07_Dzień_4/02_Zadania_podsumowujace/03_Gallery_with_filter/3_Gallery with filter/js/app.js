document.addEventListener("DOMContentLoaded", function () {

    const pictures =[...document.querySelectorAll('img')]
    console.log(pictures)

    const showButton=document.querySelector('#showButton')
    const hideButton=document.querySelector('#hideButton')

    const input = document.querySelector('#tagInput')




    showButton.addEventListener('click',function (e){
        const text = input.value
        clear()
        pictures.forEach(ele => {
            if(!ele.dataset.tag.includes(text)){
                ele.classList.add('invisible')
            }
        })
    })


    hideButton.addEventListener('click',function (e){
        const text = input.value
        clear()
        pictures.forEach(ele => {
            if(ele.dataset.tag.includes(text)){
                ele.classList.add('invisible')

            } else {
                ele.classList.remove('invisible')

            }
        })
    })



    function clear(){
        pictures.forEach(ele=>{
            ele.classList.remove('invisible')
        })
    }
});

