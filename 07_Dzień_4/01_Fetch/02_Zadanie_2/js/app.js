const ul = document.querySelector('.list');
const imageAdres ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then( data => {
        const next = nextPage(data.next)
        showAll(data.results)
    })
    .catch( error => console.log(error))

let page = 20;
function nextPage(file){
    console.log(file)
}

function showAll (arr) {
    let number =1;
  arr.forEach( el => {
      const li = document.createElement('li');
      const img = document.createElement('img')
      img.setAttribute('src', imageAdres+number+'.png')
      li.innerText=el.name
      ul.appendChild(li)
      ul.appendChild(img)
      number++
  })
}
