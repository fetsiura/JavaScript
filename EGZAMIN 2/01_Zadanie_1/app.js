function biggestSumOfTwoElements(arr ) {
    if (arr.length===1){
        return arr[0]
    }
    if(arr.length===0){
        return false
    }

    arr.sort().reverse()

    return arr[0]+arr[1]

}

console.log(biggestSumOfTwoElements([1,2,3,4]) )// => 7
console.log(biggestSumOfTwoElements([])) // => false
console.log(biggestSumOfTwoElements([76]))// => 76
console.log(biggestSumOfTwoElements([23,45,17,12]))