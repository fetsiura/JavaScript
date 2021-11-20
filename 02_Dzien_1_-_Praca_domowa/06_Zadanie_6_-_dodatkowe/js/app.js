function getLastNumbers(num, arr) {
    return arr.reverse().slice(0,num).reverse();
}
console.log(getLastNumbers(2, [1,2,3,4,5]))
console.log(getLastNumbers(1, [1,2,3,4,5]))
console.log(getLastNumbers(3, [1,2,3,4,5]))

