document.addEventListener("DOMContentLoaded",  () => {


    const adres = 'https://swapi.dev/api/starships'
    const list = document.querySelector('#starships')

    fetch(adres)
        .then(response => response.json())
        .then(data => handler(data.results))
        .catch(error => console.log(error))


    function handler(arr) {
        arr.forEach(ele => {
            const li =document.createElement('li')
        const h2 = document.createElement('h2')
            h2.style.color='red'
        h2.innerText = ele.name
        const h3 = document.createElement('h3')
        h3.innerText = ele.model
            list.appendChild(li)
            li.appendChild(h2)
            li.appendChild(h3)
        })

    }

})