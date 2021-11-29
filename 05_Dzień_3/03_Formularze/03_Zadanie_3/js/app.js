
const images = document.querySelectorAll('img')
const selected = document.querySelector('select.form-control')

images.forEach( ele => {
    if(ele.alt !=='Windows') {
        ele.classList.add('d-none')
    }
})

const form = document.querySelector('form')


form.addEventListener('submit',function (e){
    e.preventDefault()
    let val = selected.value

    images.forEach( ele => {
        if(ele.alt ===val){
            ele.classList.remove('d-none')
        } else {
            ele.classList.add('d-none')
        }
    })
})