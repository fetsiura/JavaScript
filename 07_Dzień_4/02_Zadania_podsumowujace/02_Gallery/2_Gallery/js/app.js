/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
const ul =document.querySelector('ul')
ul.classList.add('gallery')
const li = document.querySelectorAll('img')
const body = document.querySelector('body')


li.forEach( ele => {
    ele.addEventListener('click', function (e){
        const div = document.createElement('div')
        div.classList.add('fullScreen')
        body.appendChild(div)
        const img = document.createElement('img')
        img.setAttribute('src',this.src)
        div.appendChild(img)


        const button = document.createElement('button')
        div.appendChild(button)
        button.classList.add('close')
        button.innerText = 'close'


        button.addEventListener('click', function (e){
            body.removeChild(div)
        })
    })
})



