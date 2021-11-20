function factors(num) {
    const arr=[];
    if (num>0){

        for (let i=num; i>0;i--){
            if (num%i===0) {
                arr.push(i);
            }
        }

    }
    return arr.sort((a, b) => {
        return a-b;
    });

}
console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));

