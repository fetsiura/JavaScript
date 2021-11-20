
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

// filterLetters("Komputer", "Tok") // => 'Kot'
// filterLetters("Monitor", "mortadela") // => 'Motor'
// filterLetters("Kryptograficzny", "Agato") // => 'toga'

function filterLetters(word1 , word2) {
    const one = [...word1];
    const two = [...word2];
    let  arr ='';
    one.forEach(ele => {
        two.forEach( el => {
            if(ele.toUpperCase().includes(el.toUpperCase())){
                arr+=ele;
            }
        })
    })
    return arr;
}

// function filterLetters(word1 , word2) {
//     const two = [...word2];
//     const one = [...word1];
//     let word ='';
//
//     two.forEach( ele => {
//         if (word1.includes(ele.toLowerCase())){
//             word+=ele;
//         }
//     })
//     return word;
// }

console.log(filterLetters("Komputer", "Tok"));
console.log(filterLetters("Monitor", "mortadela"));
console.log(filterLetters("Kryptograficzny", "Agato"));

