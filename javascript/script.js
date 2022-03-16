console.log("js-ok")

// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100 
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// dichiaro le costanti
const grid = document.getElementById('grid');

const buttonEasy = document.getElementById('easy');

const buttonMedium = document.getElementById('medium');

const buttonHard = document.getElementById('hard');

// html bottoni difficoltà
buttonEasy.addEventListener('click', () => createElementsInGrid(100, 'easy'));

buttonMedium.addEventListener('click', () => createElementsInGrid(81, 'medium'));

buttonHard.addEventListener('click', () => createElementsInGrid(49, 'hard'));






//-------------------- Function -------------------//


// creo la griglia
function createElementsInGrid(totalCells, levelClass) {

    const grid = document.getElementById('grid');

    grid.innerHTML = '';

    for (let i = 0; i < totalCells; i++) {

        const cell = document.createElement('div');

        cell.className = 'cell';
        cell.classList.add(levelClass);

        cell.innerText = (i + 1);

        grid.appendChild(cell);
    }
}

// chiedo la difficoltà
function askUserDifficult() {
    let userChoice = prompt('Select easy, medium or hard mode.');
    if (userChoice) {
        userChoice = userChoice.trim().toLowerCase();
    }
    return userChoice
}

// creo una cella 
function createCell() {
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}


