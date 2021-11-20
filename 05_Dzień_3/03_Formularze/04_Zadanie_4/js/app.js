const form = document.querySelector('form');
const button = document.querySelector('.btn')
const tbody = document.querySelector('tbody');

const firstTeamName = form.querySelector('#team1')
const secondTeamName = form.querySelector('#team2')

const firstTeamPoints = form.querySelector('#points1')
const secondTeamPoints = form.querySelector('#points2')

button.addEventListener('click', function (e){
    e.preventDefault();
    const tr = document.createElement('tr');

        if (firstTeamName.value!==secondTeamName.value && firstTeamPoints.value>=0 && secondTeamPoints.value>=0){
            const toClone = tbody.children[1].cloneNode(true);
            toClone.children[0].innerText = firstTeamName.value;
            toClone.children[1].innerText = secondTeamName.value;
            toClone.children[2].innerText = firstTeamPoints.value + " - " + secondTeamPoints.value;
            tbody.appendChild(toClone)
        } else {
            console.log('wrong')
        }

})