
function mult(arr){
    const res = arr.reduce( (total, ele ) => {
        return total*=ele
    })
    return res;
}

console.log(mult([1,2,3]));
console.log(mult([2,8,3,7]));
console.log(mult([1,2,3,4,5,6,7]));
