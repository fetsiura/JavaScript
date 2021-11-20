/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
const ul =document.querySelector('ul')
ul.classList.add('gallery')
const li = document.querySelectorAll('li')
const body = document.querySelector('body')

li.forEach(ele => {
    ele.addEventListener('click', function (e){
        let adres = ele.firstElementChild.getAttribute('src')
        const div = document.createElement('div')
        body.appendChild(div)
        div.classList.add('fullScreen')
        const img = document.createElement('img')
        div.appendChild(img)
        img.setAttribute('src', adres)

        const button = document.createElement('button')
        div.appendChild(button)
        button.classList.add('close')
        button.innerText = 'close'

        button.addEventListener('click', function (elem){
            body.removeChild(div)
        })

    })
})