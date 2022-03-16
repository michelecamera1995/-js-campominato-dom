console.log("js-ok")

// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100 
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// chiedo al giocatore la difficoltà

let userSelection = askUserDifficult()

while (!userSelection || (userSelection !== 'easy' && userSelection !== 'medium' && userSelection !== 'hard')) {
    userSelection = askUserDifficult()
}

const grid = document.getElementById('grid');

let columns

let rows

// Difficoltà
if (userSelection === 'hard') {                     //difficoltà 3 => tra 1 e 49
    columns = 7;
    rows = 7;
} else if (userSelection === 'medium') {    // difficoltà 2 => tra 1 e 81
    columns = 9;
    rows = 9;
} else if (userSelection === 'easy') {          // difficoltà 1 => tra 1 e 100
    columns = 10;
    rows = 10;
}

// calcolo il totale delle celle da generare
const totalCells = columns * rows;

// ciclo le celle della griglia
for (let i = 0; i < totalCells; i++) {

    // creo la cella
    const cell = createCell();

    cell.innerText = (i + 1);

    // Click su cella che resta azzurra.
    cell.addEventListener('click', function (event) {
        cell.classList.add('bg-blue');
    })

    // aggiungo la cella nella griglia
    grid.appendChild(cell);
}

//-------------------- Function -------------------//

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


