
    const ul = document.querySelector('ul')
    const btnNext = document.querySelector('#next')
    const btnPrevious = document.querySelector('#previous')
    btnPrevious.classList.add('d-none')
    const imageAdres ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    let counter=1
    let next = null
    let previous = null

    if(next===null){
        first()
    }

    btnNext.addEventListener('click', makerNext)
    btnPrevious.addEventListener('click', makerPrevious)

    function makerPrevious(e){
        e.preventDefault()
        counter=counter-40
        clearAll()
        fetch(previous)
            .then(response => response.json())
            .then(resp => {
                showAll(resp.results)

                if(resp.previous ===null){
                    btnPrevious.classList.add('d-none')
                }
                next = resp.next
                previous = resp.previous
                console.log(next)
                console.log(previous)
            })
    }

    function makerNext(e){
        e.preventDefault()
        btnPrevious.classList.remove('d-none')
        console.log(next)
        console.log(previous)
        clearAll()
        fetch(next)
            .then(response => response.json())
            .then(resp => {
                next = resp.next
                previous = resp.previous
                showAll(resp.results)
            })
    }

    function first(){
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(resp => {

                next = resp.next
                previous = resp.previous
                showAll(resp.results)
            })
    }


    function showAll(arr) {

        arr.forEach(ele => {
            const li = document.createElement('li')
            const img = document.createElement('img')
            img.setAttribute('src', imageAdres+counter+'.png')
            counter++
            li.innerText = ele.name
            ul.appendChild(li)
            ul.appendChild(img)
        })

    }

    function clearAll(){
        const li = document.querySelectorAll('li')
        const img = document.querySelectorAll('img')
        li.forEach(ele=>{
            ele.parentElement.removeChild(ele)
        })
        img.forEach(ele=>{
            ele.parentElement.removeChild(ele)
        })

    }

