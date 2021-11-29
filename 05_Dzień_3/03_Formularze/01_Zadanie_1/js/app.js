

const form = document.querySelector('form')

form.addEventListener('submit', maker)



function maker(e){

    const errorContainer = document.querySelector('#error-message')
    const successContainer = document.querySelector('#success-message')
    errorContainer.classList.add('d-none')
    successContainer.classList.add('d-none')
    errorContainer.innerHTML =''

    const  errors = []
    e.preventDefault()

    if(!e.target.email.value.includes('@')){
        errors.push('Email musi posiadać znak @')
    }
    if(e.target.name.value.length<=2){
        errors.push('Twoje imię jest za krótkie')

    }
    if(e.target.surname.value.length<=2){
        errors.push('Twoje nazwisko jest za krótkie')

    }

    if(!e.target.pass1.value.length || e.target.pass1.value!==e.target.pass2.value){
        errors.push('Hasła nie są takie same lub puste')
    }

    if(!e.target.agree.checked){
        errors.push('Musisz zaakceptować warunki.')
    }

    if(errors.length){
        errorContainer.classList.remove('d-none')

        errors.forEach(elem =>{

            const div = document.createElement('div')
            div.innerText = elem
            errorContainer.appendChild(div)

        })
        return ;
    }

    successContainer.classList.remove('d-none')
    successContainer.innerHTML='Formularz wysłany!'


}

