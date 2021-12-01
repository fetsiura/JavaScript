document.addEventListener("DOMContentLoaded", function () {

    const div = document.querySelector('#app')
    const URL='https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country='
    function createSelect () {
        const select = document.createElement('select')
        function createOption(lan){
            const option = document.createElement('option')
            option.innerText=lan
            select.appendChild(option)
        }
        createOption('PL')
        createOption('GB')
        createOption('US')

        div.appendChild(select)
    }


    createSelect()
    first()

    function first (){
        fetch(URL+'PL')
            .then(resp => resp.json())
            .then(res => {
                makeHolidays(res.holidays)
            })
    }

    const select = document.querySelector('select')
    select.addEventListener('change', function (e){
        e.preventDefault()
        clearHolidays()
        fetch(URL+e.target.value)
            .then(resp => resp.json())
            .then(res => {
                makeHolidays(res.holidays)
            })
    })


    function makeHolidays(arr){
        arr.forEach( ele => {
            const li = document.createElement('li')
            div.appendChild(li)
            const name =document.createElement('h3')
            const date = document.createElement('h5')
            name.innerText=ele.name
            date.innerText=ele.date
            li.appendChild(name)
            li.appendChild(date)
        })
    }


    function clearHolidays(){
        const li = document.querySelectorAll('li')
        li.forEach(ele => {
            ele.parentElement.removeChild(ele)
        })
    }
})