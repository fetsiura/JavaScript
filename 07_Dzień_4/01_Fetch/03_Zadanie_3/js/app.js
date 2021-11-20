document.addEventListener("DOMContentLoaded", function () {

const body = document.querySelector('body');
const div =document.querySelector('#app')
let URL = 'https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=';

function createSelect (){
    const select= document.createElement('select')
    div.appendChild(select)

    function languageToSelect(lang){
        const option = document.createElement('option')
        option.innerText = lang;
        select.appendChild(option)
    }
    languageToSelect('PL')
    languageToSelect('GB')
    languageToSelect('US')
}

createSelect()

function checkLanguage(country){
    let adres ='';
    if (select.value === 'PL'){
        adres = URL+select.value
    } else if (select.value === 'GB'){
        adres = URL+select.value
    } else if (select.value === 'US'){
        adres = URL+select.value
    }

    fetch(adres)
        .then(response => response.json())
        .then(data => createHoliday(data.holidays))
        .catch(error => console.log(error))

    function createHoliday(arr) {
        arr.forEach(ele => {
            const li = document.createElement('li')
            const nameOfHoliday = document.createElement('h3')
            nameOfHoliday.innerText=ele.name
            const dateOfHoliday = document.createElement('h5')
            dateOfHoliday.innerText=ele.date
            body.appendChild(li)
            li.appendChild(nameOfHoliday)
            li.appendChild(dateOfHoliday)
            // console.log(ele)
        })
        const select=document.querySelector('select')
        select.addEventListener('change', function (e){
            e.preventDefault()
        })
    }
}


    console.log("DOM fully loaded and parsed!");
});