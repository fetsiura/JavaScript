const  blocks = document.querySelectorAll(".blocks")


blocks.forEach(ele => {
    console.log(ele.innerText)
})

blocks.forEach(ele => {
    ele.innerText = "newVAL"
})


blocks.forEach(ele => {
    console.log(ele.innerText)
})

// const  res = blocks.forEach = [...ele].forEach( el=> el.innerText = "newVAL")