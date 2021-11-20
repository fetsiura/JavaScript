const form = document.querySelector('form');
form.addEventListener('submit', maker);

function maker(e){
    let errorContainer = document.querySelector('#error-message');
    let successContainer = document.querySelector('#success-message');
    errorContainer.classList.add('d-none')
    successContainer.classList.add('d-none')
    errorContainer.innerHTML='';

    e.preventDefault();
    const errors =[];

    if (!e.target.email.value.includes('@')){
        errors.push('Email musi posiadać znak @')
    }
    if(e.target.name.value.length<=2) {
        errors.push('Twoje imię jest za krótkie')
    }
    if(e.target.surname.value.length<=2) {
        errors.push('Twoje nazwisko jest za krótkie')
    }
    const pass1 = e.target.pass1.value;
    const pass2 = e.target.pass2.value;
    if(!pass1.length || pass1!==pass2){
        errors.push('Hasła nie są takie same lub puste,')
    }
    if (!e.target.agree.checked){
        errors.push('Musisz zaakceptować warunki')
    }

    if(errors.length) {
        errorContainer.classList.remove('d-none')
        errors.forEach( ele => {
            const div = document.createElement('div');
            div.innerText=ele;
            errorContainer.appendChild(div)
        })
        return ;
    }

    successContainer.classList.remove('d-none')
    successContainer.innerHTML='Formularz wysłany!'

}
