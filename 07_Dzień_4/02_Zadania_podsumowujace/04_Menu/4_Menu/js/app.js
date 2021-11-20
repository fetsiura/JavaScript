document.addEventListener("DOMContentLoaded", function () {

    const li = [...document.querySelector('ul').children]
    console.log(li)

    li.forEach(ele => {
        ele.addEventListener('mouseover', function (e){
            e.preventDefault()
            const ul=ele.querySelectorAll('ul')
            if (ul.length){
                ul.forEach( e=>{
                    e.style.display='block'
                    }
                )
            }
        })
        ele.addEventListener('mouseout', function (e){
            e.preventDefault()
            const ul=ele.querySelectorAll('ul')
            if (ul.length){
                ul.forEach( e=>{
                        e.style.display='none'
                    }
                )
            }
        })

    })

})