document.addEventListener("DOMContentLoaded", function () {

    const pictures = [...document.querySelectorAll('img')]
    const show = document.querySelector('#showButton')
    const hide = document.querySelector('#hideButton')
    const input = document.querySelector('#tagInput')


    show.addEventListener('click', function (e){
        e.preventDefault()
        let text = input.value
        console.log(text)

        pictures.forEach(ele => {
            let index = ele.dataset.tag.split(',').includes(text)
            if (index>0){
                ele.classList.remove('invisible')
            } else {
                ele.classList.add('invisible')
            }
        })
    })
    hide.addEventListener('click', function (e){
        e.preventDefault()
        let text = input.value

        pictures.forEach(ele => {
            let index = ele.dataset.tag.split(',').includes(text)
            if (index>0){
                ele.classList.add('invisible')
            }else {
                ele.classList.remove('invisible')
            }
        })
    })



});

