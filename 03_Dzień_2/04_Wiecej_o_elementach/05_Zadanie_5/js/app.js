const li = document.querySelectorAll('.exercise li')

li.forEach( (ele,counter) => {
    ele.setAttribute('data-id',counter)
    counter++
})