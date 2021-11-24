const recipe = {

    title : "Noodles",
    servings : 2,
}

recipe.ingredients = ["1","2","3"];

console.log(recipe.title)
console.log(recipe.servings)
recipe.ingredients.forEach(ele => {
    console.log(ele)
})