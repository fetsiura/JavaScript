function getMissingElement(arr){
    let res =null;
    for (let i=0;i<arr.length;i++) {
        if (i===arr.length-1){
            break;
        }
        if (Math.abs(arr[i]-arr[i+1])!==1){
            res = arr[i]+1;
        }
    }
    return res;
}

console.log(getMissingElement([1,2,3,4,5,6,7]));
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));