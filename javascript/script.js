console.log("js-ok")

// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100 
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// dichiaro le costanti


const grid = document.getElementById('grid');

const buttonEasy = document.getElementById('easy');

const buttonMedium = document.getElementById('medium');

const buttonHard = document.getElementById('hard');

// html bottoni difficoltà
buttonEasy.addEventListener('click', () => start(100, 'easy'));

buttonMedium.addEventListener('click', () => start(81, 'medium'));

buttonHard.addEventListener('click', () => start(49, 'hard'));

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
    for (let i = 0; i < totalCells; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.classList.add(levelClass);
        cell.innerText = (i + 1);
        grid.appendChild(cell);
        cell.id = ('c-' + (i + 1));
    }
}

// creo le 16 mine non duplicate
function addMines(max) {
    const listMine = [];
    while (listMine.length < 16) {
        const numberMine = generateRandomNumber(1, max)
        if (listMine.includes(numberMine) === false) {
            listMine.push(numberMine);
        }
    }
    return listMine;
}

// start
function start(totCells, level) {
    const bombPos = addMines(totCells)
    let count = 0;
    console.log(bombPos)
    createElementsInGrid(totCells, level);
    for (let i = 1; i <= totCells; i++) {
        const cell = document.getElementById('c-' + i);
        cell.addEventListener('click', () => {
            count++;
            const bombPresence = bombPos.includes(i);
            if (bombPresence) {
                cell.classList.toggle('bg-red');
                grid.classList.add('n-cursor');
                alert("Hai perso, riavvia!");
                alert("hai cliccato " + count + " volte senza aver trovato la bomba!")
            } else {
                cell.classList.toggle('bg-blue');
                let clicked = true;
                console.log(clicked)
                if (!bombPresence && clicked) {
                    alert("Hai vinto!")
                }
            }
        });
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


