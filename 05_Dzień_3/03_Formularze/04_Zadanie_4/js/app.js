
const  form = document.querySelector('form')
const team1 = document.querySelector('#team1')
const points1 = document.querySelector('#points1')

const team2 = document.querySelector('#team2')
const points2 = document.querySelector('#points2')

const tbody = document.querySelector('tbody')


form.addEventListener('submit', function (e){
    e.preventDefault()

    if( team1.value !== team2.value && points1.value>=0 && points2.value>=0 && team1.value.length && team2.value.length){
        const tr = document.createElement('tr')

        const tdName1 =document.createElement('td')
        tdName1.innerText=team1.value
        const tdName2 =document.createElement('td')
        tdName2.innerText=team2.value
        const tdRes =document.createElement('td')
        tdRes.innerText=points1.value+" - "+points2.value

        tr.appendChild(tdName1)
        tr.appendChild(tdName2)
        tr.appendChild(tdRes)
        tbody.appendChild(tr)

    }
})