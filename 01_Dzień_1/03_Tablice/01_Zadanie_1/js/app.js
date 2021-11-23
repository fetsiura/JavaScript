


function distFromAverage(arr) {
    const sum = arr.reduce( (total , ele ) => {
        return total+ele;
    });
    let  ave = Math.floor(sum/arr.length);

    const  res = arr.map( ele => {
        return Math.abs(ele - ave);
    });

    return res;

}

console.log(distFromAverage([1,2,3,4,5,6,7]));