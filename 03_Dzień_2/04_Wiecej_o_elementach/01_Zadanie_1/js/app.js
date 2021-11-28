const li = document.querySelectorAll('.exercise li')


li.forEach( (ele,counter) =>{
    if(counter %2!==0){
        ele.style.backgroundColor = '#9e9e9e'
    }
    if(counter===4){
        ele.classList.add("big")
    }

    if(counter%3===0){
        ele.style.textDecoration = 'underline'
    }
} )