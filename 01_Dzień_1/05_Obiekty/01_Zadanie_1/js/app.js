const country = {
    capital : "Warszawa",
    population: 100000,
    president: "Duda",
    ministers: ["some1", "some2", "some3"]
};

console.log(country.capital);
console.log(country.population);
console.log(country.president);
country.ministers.forEach(ele => {
    console.log(ele);
})
`

Object.entries(country).forEach(function(el){
    const key = el[0];
    const value = el[1];
    if(typeof value == "object"){
        console.log(key);
        value.forEach(function(nestedEl){
            console.log(nestedEl);
        })
        return;
    }
        console.log(\`key: ${key}- ${value}\`);
`