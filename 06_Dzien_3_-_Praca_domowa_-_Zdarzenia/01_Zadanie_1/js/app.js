
document.addEventListener('DOMContentLoaded', function () {

    const one = document.querySelector('.btn-primary')
    const two = document.querySelector('.btn-success')


    one.addEventListener('click', function (e) {
        this.nextElementSibling.classList.toggle('d-none')
    })


    two.addEventListener('mouseover', function (e) {
        this.nextElementSibling.classList.toggle('d-none')
    })

})