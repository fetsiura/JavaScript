

const  country = {
    capital : "Warszawa",
    population : 100000,
    president : "Traskowski",
    ministers : ["some1", "some2"]
}

console.log(country.capital);
console.log(country.population);
console.log(country.president);

country.ministers.forEach( ele => {
    console.log(ele)
})