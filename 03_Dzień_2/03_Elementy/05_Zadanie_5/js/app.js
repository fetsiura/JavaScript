const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");

function getTags(elements) {
    const arr=[];
    elements.forEach(ele => {
        arr.push(ele.tagName);
    })
    return arr;
}

console.log(getTags(childElements));
////////////
// const arr2=[];
//
// const getTag = element => [...element].forEach( el => arr2.push(el.tagName));
// console.log(getTag(childElements))