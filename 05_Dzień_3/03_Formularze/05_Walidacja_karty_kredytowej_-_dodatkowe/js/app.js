const card = document.querySelector('#cardNumber')
const icons = document.querySelectorAll('.fab');


function checkVisa (cardNumber){
    let regVisa = RegExp('^4([0-9]){12,15}$')
    return regVisa.test(cardNumber)
}

function checkAmerican (cardNumber){
    let regAmerica = RegExp('^3[4|7]([0-9]){13}$')
    return regAmerica.test(cardNumber)
}
function checkMaster (cardNumber){
    let regMaster = RegExp('^5([0-9]){15}$')
    return regMaster.test(cardNumber)
}

function changeColor (cardName) {
    const cart = document.getElementById(cardName)
    if (cardName ==='visa-icon'){
        cart.style.color='blue'
    } else if (cardName==='mastercard-icon'){
        cart.style.color='red'
    } else if (cardName==='amex-icon'){
        cart.style.color='blue'
    }
}
function clearAllColor (cardName){
    const cards = document.getElementById(cardName)
    cards.style.color='grey'
}
card.addEventListener('input', function  (e) {
    let cardNumber = card.value;
    if (checkVisa(cardNumber)) {
        changeColor('visa-icon')
    } else if (checkMaster(cardNumber)){
        changeColor('mastercard-icon')
    } else if (checkAmerican(cardNumber)){
        changeColor('amex-icon')
    } else {
        clearAllColor('visa-icon')
        clearAllColor('mastercard-icon')
        clearAllColor('amex-icon')
    }
    e.preventDefault();

})


