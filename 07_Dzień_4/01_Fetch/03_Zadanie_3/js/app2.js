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
    const select = document.querySelector('select')

    // console.log(select.value)


    // select.addEventListener('change', function (e){
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     changeLan(e.target.value)
    // })

    function changeLan(option){
        let adresForFetch = URL+'PL'
        // if (option==='GB'){
        //     adresForFetch=URL+option
        // } else if (option==='US'){
        //     adresForFetch=URL+option
        // } else {
        //     adresForFetch=URL+'PL'
        // }
        console.log('-----'+ adresForFetch)

       function createTable (arr) {
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



        fetch(adresForFetch)
            .then(response => response.json())
            .then(data => createTable(data.holidays))
            .catch(error => console.log(error))
    }

changeLan()
})