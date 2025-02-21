
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6],  
    [1, 4, 7],  
    [2, 5, 8],  
    [0, 4, 8],   
    [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');

/*-------------------------------- Functions --------------------------------*/

const updateBoard = () => {
    board.forEach((cell, idx) => {
        squareEls[idx].textContent = cell;
    });
};

const updateMessage = () => {
    if (!winner && !tie) {
      if (turn === 'X') {
        messageEl.textContent = "It's X's turn";
      } else {
        messageEl.textContent = "It's O's turn";
      }
    } else if (!winner && tie) {
      messageEl.textContent = 'Tie game!';
    } else {
      if (turn === 'X') {
        messageEl.textContent = 'X wins!';
      } else {
        messageEl.textContent = 'O wins!';
      }
    }
  };

const render = () => {
    updateBoard();
    updateMessage();
};

const init = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
};

init();

const handleClick = (evt) => {
    const sqIdx = Number(evt.target.id);
    if (board[sqIdx] !== '' || winner) return;

    placePiece(sqIdx);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
};

const placePiece = (idx) => {
    board[idx] = turn;
};

const checkForWinner = () => {
      winningCombos.forEach((winningCombo) => {
        if (
          board[winningCombo[0]] !== '' &&
          board[winningCombo[0]] === board[winningCombo[1]] &&
          board[winningCombo[0]] === board[winningCombo[2]]
        ) {
          winner = true;
        }
      })
    };

const checkForTie = () => {
    if (!winner && !board.includes('')) {
        tie = true;
    }
};

const switchPlayerTurn = () => {
    if (winner) return;
    turn = turn === 'X' ? 'O' : 'X';
};

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
    square.addEventListener('click', handleClick);
});
resetBtnEl.addEventListener('click', init);
