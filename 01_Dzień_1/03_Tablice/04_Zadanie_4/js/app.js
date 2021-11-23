
function multiply(array) {

    const res =array.reduce( (total,ele) => {
        return total*=ele;
    })
    return res;
}

console.log(multiply([1,2,3,4,5]))