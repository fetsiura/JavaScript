
function addArrays (arr1, arr2){

    let minTab = arr1;
    let maxTab = arr2;

    if (arr1.length > arr2.length) {
        minTab = arr2;
        maxTab = arr2;
    }

    return maxTab.map( function (ele , i) {
        return ele + (minTab[i] || 0);
    })

};

console.log(addArrays([1,2,3], [1,1,1,1,1]));

