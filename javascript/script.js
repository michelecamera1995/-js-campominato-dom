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

//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//I numeri nella lista delle bombe non possono essere duplicati.

//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
//abbiamo calpestato una bomba 
//la cella si colora di rosso e la partita termina
//altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

const Mines = addMines();

console.log(Mines);


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

// creo le 16 mine non duplicate
function addMines() {
    const numberMine = [];
    for (var i = 0; i < 16; i++) {
        const number = generateRandomNumber(1, 100);
        if (!numberMine.includes(number)) {
            numberMine.push(number);
        }
    }
    return numberMine;
}


// generatore di numeri casuali
function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random() * range + min);
    return numeroRandom;
}

// creo una cella 
function createCell() {
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}


