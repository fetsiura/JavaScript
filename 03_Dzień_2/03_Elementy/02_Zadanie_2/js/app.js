const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");


console.log(children);
children.forEach(ele => {
    console.log(ele.tagName, ele.className)
});

someBlocks.forEach(ele => {
    console.log(ele.tagName, ele.className)
});

listElements.forEach(ele => {
    console.log(ele.tagName, ele.className)
});


// const table = [...children, ...someBlocks, ...listElements];
//
// table.forEach( ele => {
//     console.log(ele.tagName, ele.className);
// })
