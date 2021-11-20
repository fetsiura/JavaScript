function Basket() {
    this.products = [];
    this.sum = 0;
}
Basket.prototype.addProduct = function (name, price) {
    this.products.push({name, price});
    this.sumBasket();
}
Basket.prototype.showBasket = function () {
    this.products.forEach(function (el) {
        console.log(el);
    })
}
Basket.prototype.sumBasket = function () {
    this.sum = this.products.reduce(function (prev, curr) {
        return prev + curr.price
    }, 0)
}
const basket = new Basket();
basket.addProduct("marchewka", 12);
basket.addProduct("piwo", 5);
basket.addProduct("wędlina", 25);
basket.addProduct("chleb",3);
basket.addProduct("pietruszka", 35);
basket.addProduct("Cola", 3500);
basket.showBasket();
console.log(basket);