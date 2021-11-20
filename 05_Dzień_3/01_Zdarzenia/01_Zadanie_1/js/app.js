const parents = document.querySelectorAll(".parent")
parents.forEach((parent) => {
    parent.addEventListener("mouseenter", function (event) {
        event.target.firstElementChild.classList.add(`visibile`)
    })
    parent.addEventListener("mouseleave", function (event) {
        this.firstElementChild.classList.remove(`visibile`)
    })
})