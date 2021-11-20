function addTheSameNumbers (num, arr) {
    let res=null;
    arr.forEach(el => {
        if (el===num) {
            res+=el;
        }
    })
    return res;
}

console.log(addTheSameNumbers(7,[4,7,24,7,0,10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ));