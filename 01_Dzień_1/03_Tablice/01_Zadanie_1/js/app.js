function distFromAverage (arr) {
    const sum = arr.reduce( (sum, ele) => {
        return sum + ele;
    });

    let avg = Math.floor(sum/arr.length);
    console.log(avg);


    const res = arr.map( (ele) => {
        return Math.abs(ele-avg);
    });

    return res;
};

console.log(distFromAverage([1,2,3,4,5,6,7]));

