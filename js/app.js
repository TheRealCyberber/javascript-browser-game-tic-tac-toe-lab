/*-------------------------------- Constants --------------------------------*/
let board;
let turn;
let winner;
let tie;


/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector('.sqr');
const messageEl = document.querySelector('#message');


/*-------------------------------- Functions --------------------------------*/
const init = () => {
    board = ['', '', '', '', '', '', '', '']
    turn = 'X';
    winner = false;
    tie = false;    
    render();
};

init();

const render = () => {
    updateBoard();
    updateMessage();
};


const updateBoard = () => {
    board.forEach((cell, idx) => {
        if (cell === 'X') {
            squareEls[idx].textContent = 'X';
        } else if (cell === 'O') {
            squareEls[idx].textContent = 'O';
        } else {
            squareEls[idx].textContent = '';
        }
    });
};

const updateMessage = () => {
    if (!winner && !tie) {
        if (turn === 'X') {
            messageEl.textContent = "it's X's turn";
        } else {
            messageEl.textContent = "it's O's turn";
        }
        }  else if (!winner && tie) {
            messageEl.textContent = "Tie game";
        } else {
            if (turn === 'X') {
                messageEl.textContent = "X wins";
            } else {
                messageEl.textContent = "O wins";
            }
        }
    };




/*----------------------------- Event Listeners -----------------------------*/


