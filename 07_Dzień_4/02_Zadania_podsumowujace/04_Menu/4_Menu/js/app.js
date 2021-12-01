document.addEventListener("DOMContentLoaded", function () {

    const elements = [...document.querySelector('ul').children]


    elements.forEach( ele => {
        ele.addEventListener('mouseover', function (e){
            const ul = ele.querySelectorAll('ul')
            if(ul.length){
                ul.forEach(elem=>{
                    elem.style.display='block'
                })
                console.log('pokaż')

            }

        })
    })

    elements.forEach( ele => {
        ele.addEventListener('mouseout', function (e){

            const ul = ele.querySelectorAll('ul')
            if(ul.length){
                ul.forEach(elem=>{
                    elem.style.display='none'

                })
                console.log('schowaj')

            }
        })
    })

})