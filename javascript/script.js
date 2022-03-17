console.log("js-ok")

// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100 
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

//numero di bombe generate

const numberOfBombs = 1;

// dichiaro le costanti

const grid = document.getElementById('grid');

const buttonEasy = document.getElementById('easy');

const buttonMedium = document.getElementById('medium');

const buttonHard = document.getElementById('hard');


// html bottoni difficoltà

buttonEasy.addEventListener('click', () => start(49, 'easy'));

buttonMedium.addEventListener('click', () => start(81, 'medium'));

buttonHard.addEventListener('click', () => start(100, 'hard'));

//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//I numeri nella lista delle bombe non possono essere duplicati.

//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
//abbiamo calpestato una bomba 
//la cella si colora di rosso e la partita termina
//altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

//La partita termina quando il giocatore clicca su una bomba 
//o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, 
//cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

//-------------------- Function -------------------//

// creo la griglia
function createElementsInGrid(totalCells, levelClass) {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    grid.classList.remove('n-cursor');
    for (let i = 0; i < totalCells; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.classList.add(levelClass);
        //cell.innerText = (i + 1);
        grid.appendChild(cell);
    }
}

// creo le 16 mine non duplicate
function addMines(max) {
    const listMine = [];
    while (listMine.length < numberOfBombs) {
        const numberMine = generateRandomNumber(1, max)
        if (listMine.includes(numberMine) === false) {
            listMine.push(numberMine);
        }
    }
    return listMine;
}

// start game
function start(totCells, level) {
    const bombPos = addMines(totCells);
    console.log(bombPos)
    createElementsInGrid(totCells, level);
    addClickToCells(bombPos);
}

// evento click e condizioni vittoria / sconfitta
function addClickToCells(bombs) {
    let points = 0;
    const allCells = document.getElementsByClassName('cell');
    for (let i = 0; i < allCells.length; i++) {
        const cell = allCells[i];
        cell.addEventListener('click', () => {
            const bombPresence = bombs.includes(i + 1);
            if (bombPresence) {
                grid.classList.add('n-cursor');
                cell.classList.add('bomb');
                showBombs(bombs);
                alert("Hai perso, riavvia!");
            } else {
                cell.classList.add('metal');
                console.log(points)
                points++;
                const notBombs = allCells.length - bombs.length;
                if (points >= notBombs) {
                    blockCells();
                    alert("Hai vinto!");
                    alert('Hai ottenuto: ' + points + ' punti');
                }
            }
        });
    }
}

// mostro le bombe
function showBombs(bombsToShow) {
    const allCells = document.querySelectorAll('.cell');
    for (let i = 0; i < allCells.length; i++) {
        if (bombsToShow.includes(i + 1)) {
            const bombCell = allCells[i];
            bombCell.classList.add('bomb');
        }
    }

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

// blocco le celle
function blockCells() {
    const grid = document.getElementById('grid');
    grid.classList.add('n-cursor');
}
