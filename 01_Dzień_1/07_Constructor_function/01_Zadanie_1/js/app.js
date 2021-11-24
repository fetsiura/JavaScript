function Basket (){
    this.products = [],
        this.sum =0
}

Basket.prototype.addProduct = function (name,price) {
    this.products.push({name,price});
    this.sumBasket();
}

Basket.prototype.showBasket = function (){
    this.products.forEach( ele => {
        console.log( ele)
    })
}

Basket.prototype.sumBasket = function (){
    this.sum = this.products.reduce( (total, ele) => {
        return total+=ele.price;
    },0)
}


const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();
aliceBasket.sumBasket()
console.log(aliceBasket)


const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
console.log(bruceBasket)