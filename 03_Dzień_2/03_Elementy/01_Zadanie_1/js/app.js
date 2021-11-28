const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo (links) {
    const res = [];
    links.forEach(ele => {
        res.push(ele.dataset);
    })
    return res;
}

const getDataInfo2 = elements => [...elements].map(el => el.dataset.color) // second option
console.log(getDataInfo(links));