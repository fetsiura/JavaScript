function print2DArray (arr) {
    for (let i =0; i< arr.length;i++) {
        for (let j=0; j<arr[i].length;j++) {
            console.log(arr[i][j]);
        }
    }
};

function print2DArray2 (arr) {
    arr.forEach( ele => {
        ele.forEach( sec => {
            console.log(sec)
        })
    })
};



print2DArray([
    [1,2],
    [3,3],
    [5,7]
]);

print2DArray2([
    [1,2],
    [3,3],
    [5,7]
]);