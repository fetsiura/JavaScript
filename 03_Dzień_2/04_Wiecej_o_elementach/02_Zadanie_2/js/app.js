const  chrome2 = document.querySelector('.chrome')

chrome2.nextElementSibling.innerText = 'Chrome'
chrome2.style.width = '100px'


console.log(chrome2.nextElementSibling)

const edge2 = document.querySelector('.edge')
edge2.style.backgroundImage ='url(img/edge.jpg)'



const fire2 = document.querySelector('.firefox')
fire2.style.backgroundImage ='url(img/firefox.jpg)'
fire2.nextElementSibling.innerText = 'Firefox'