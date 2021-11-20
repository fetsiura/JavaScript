const person = {
    name: "Jaro",
    age: 21,
    sayHello: function (name){
        console.log("Hello I am"+ this.name)
    }
}

person.sayHello();