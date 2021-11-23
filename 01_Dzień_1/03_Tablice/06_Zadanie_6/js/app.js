function getEvenAverage (arr) {

    if(arr.length===0){
        return null;
    } else {

        let sum =0;
        const  res = arr.forEach( ele => {
            if(ele%2===0) {
                sum+=ele;
            }
        })

        return sum;
    }
}

console.log(getEvenAverage([1,2,3,4,5,6,7]));
console.log(getEvenAverage([1,1,1,1]));


