const recipe = {

    title : "Noodles",
    servings : 2,
}

recipe.ingredients = ["1","2","3"];


console.log(recipe.servings)
console.log(recipe.title)
recipe.ingredients.forEach(ele => {
    console.log(ele)
})