class Product {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    printInfo() {
        console.log(`${this.constructor.name} - title: ${this.title}, author: ${this.author}`);
    }
}

class Book extends Product {
    order() {
        const text = 'Podaj adres dostawy!';
        console.log(text);
        return text;
    }
}

class Ebook extends Product {
    download() {
        const text = 'Ściąganie... ' + this.title;
        console.log(text);
        return text;
    }
}

const book = new Book('Najdłuższa noc', 'Maciej Dancewicz');
const ebook = new Ebook('Ciemniejsze niebo', 'Ruben Eliassen');

book.printInfo();
ebook.printInfo();

book.order();
ebook.download();