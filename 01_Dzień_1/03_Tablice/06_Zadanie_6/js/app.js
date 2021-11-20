function getEvenAverage2 (arr) {
    counter =0;
    let res =0;

    arr.forEach(el => {
            if(el %2 ===0){
                res+=el;
                counter++;
            }
        }
    )
    if (res===0){
        return null
    }
    return res/counter;
}

console.log(getEvenAverage2([1,2,3,4,5,6,7]));
console.log(getEvenAverage2([1,1,1,1]));


