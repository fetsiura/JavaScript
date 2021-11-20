function Calculator (){
    this.history = [];
}
Calculator.prototype.add = function (num1,num2) {
    let res = num1+num2;
    this.history.push("added "+num1+" to "+num2+" got "+ res);
}

const calculator = new Calculator();

Calculator.prototype.multiply = function (num1,num2) {
    let res = num1*num2;
    this.history.push("multiplied "+num1+" to "+num2+" got "+ res);
}
Calculator.prototype.subtract = function (num1,num2) {
    let res = num1-num2;
    this.history.push("subtracted "+num1+" by "+num2+" got "+ res);
}
Calculator.prototype.divide = function (num1,num2) {
    let res = Math.floor(num1/num2);
    this.history.push("divided "+num1+" to "+num2+" got "+ res);
}

Calculator.prototype.printOperations = function () {
    this.history.forEach( el => {
        console.log(el)
    })
}

Calculator.prototype.clearOperations = function () {
    this.history = [];
}

calculator.add(2,2);
calculator.multiply(2,3);
calculator.subtract(2,3);
calculator.divide(10,2);
calculator.printOperations();
calculator.clearOperations();
calculator.printOperations();


