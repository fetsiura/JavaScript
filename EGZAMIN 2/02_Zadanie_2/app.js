document.addEventListener("DOMContentLoaded", function () {


// const task1EL = document.querySelectorAll('.qqq')
// function getTagElement(arr){
//     const  res =[]
//     arr.forEach( ele => {
//     res.push(ele.tagName)
// })
//     return res;
// }
// console.log(getTagElement(task1EL))

    fetch('https://fe-api-jquery.firebaseio.com/fe-api-jquery.json')
        .then(response => response.json())
        .then(re => {
            let counter =0
            for (let i=0;i<4;i++){
                const body = document.querySelector('body')
                const li = document.createElement('li')
                body.appendChild(li)
                const h2 = document.createElement('h2')
                h2.innerText=re[counter].title

                li.appendChild(h2)
                const h3 = document.createElement('h3')
                h3.innerText=re[counter].year
                li.appendChild(h3)
                counter++
            }
        })

})