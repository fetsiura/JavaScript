const Book = {

    title: "Some",
    author: "Rowling",
    numberOfPages: 200
};

Object.entries(Book).forEach(ele => {
    const key = ele[0];
    const val = ele[1];

    console.log(key +" - "+ val);
})



