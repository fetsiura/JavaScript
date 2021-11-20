document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const book = document.querySelector('.book-info')

// form.addEventListener('submit', handler);
// function getBook(numerISBN){
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${numerISBN}`)
//         .then(response => response.json())
//         .then(books => books.items[0])
//         .then(book => book.volumeInfo)
//         .then(book => insertTitleToDOM(book.title))
// }
// function handler(e) {
//     e.preventDefault();
//     const isbn = e.target.isbn.value;
//     getBook(isbn);
// }
// function insertTitleToDOM(title){
//     const h2 = document.createElement("h2");
//     h2.innerText = title;
//     const section = document.querySelector(".book-info");
//     section.appendChild(h2);
// }

    form.addEventListener('submit', (ele) => {
        ele.preventDefault()
        fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:'+ele.target.isbn.value)
            .then(response => response.json())
            .then(re => {
                const h2 = document.createElement('h2')
                h2.innerText= re.items[0].volumeInfo.title
                book.appendChild(h2)
            })

    })

})