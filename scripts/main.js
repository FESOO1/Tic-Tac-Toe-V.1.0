// TURN
const turnSvgContainer = document.querySelector('.main-tic-tac-toe-top-turn-svg-container');

// 
const markXText = document.querySelector('#markXText');
const markXCounterText = document.querySelector('#markXCounterText');
const markTiesText = document.querySelector('#markTiesText');
const markTiesCounterText = document.querySelector('#markTiesCounterText');
const markOText = document.querySelector('#markOText');
const markOCounterText = document.querySelector('#markOCounterText');

// MARK CONTAINERS
const markContainers = document.querySelectorAll('.main-tic-tac-toe-middle-inner');
const marks = document.querySelectorAll('.main-tic-tac-toe-middle-itself');
const obj = {
    isXsTurn: true,
    playerMark: 'X',
    playerMarkTwo: 'O',
    markSVGs: {
        X: '<svg class="main-tic-tac-toe-middle-itself-svg-x" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD"></path></svg>',
        O: '<svg class="main-tic-tac-toe-middle-itself-svg-o" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"></path></svg>',
    },
    gameHasBeenWon: false,
};

// CHANGING THE TURNS

function changingTheTurns() {
    if (obj.isXsTurn === true) {
        turnSvgContainer.innerHTML = '<svg class="main-tic-tac-toe-top-turn-svg-container-svg" aria-hidden="true" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd"></path></svg>';
    } else {
        turnSvgContainer.innerHTML = '<svg class="main-tic-tac-toe-top-turn-svg-container-svg" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"></path></svg>';
    };
};

// ADDING ATTRIBUTES TO MARK CONTAINERS

for (let i = 0; i < marks.length; i++) {
    marks[i].setAttribute('data-mark-container-index', i);
    marks[i].setAttribute('data-mark-container-state', 'empty');
};

// HOVERING OVER THE MARK CONTAINERS

for (let i = 0; i < marks.length; i++) {
    /* marks[i].addEventListener('mouseenter', () => {
        const markState = marks[i].getAttribute('data-mark-container-state');
        if (markState === 'empty') {
            const markContainerChild = document.createElement('div');
            markContainerChild.classList.add('main-tic-tac-toe-middle-itself-svg-container');

            if (obj.playerMark === 'X') {
                markContainerChild.innerHTML = obj.markSVGs[obj.playerMark];
            } else {
                markContainerChild.innerHTML = obj.markSVGs[obj.playerMark];
            };

            marks[i].appendChild(markContainerChild);
        };
    });

    // REMOVING THE ELEMENT
    marks[i].addEventListener('mouseleave', () => {
        marks[i].innerHTML = '';
    }); */

    // MARKING
    marks[i].addEventListener('click', () => {
        const markState = marks[i].getAttribute('data-mark-container-state');
        const markContainerChild = document.createElement('div');
        markContainerChild.classList.add('main-tic-tac-toe-middle-itself-svg-container');

        if (obj.isXsTurn === true) {
            if (markState === 'empty') {
                markContainerChild.innerHTML = obj.markSVGs[obj.playerMark];

                marks[i].appendChild(markContainerChild);
                marks[i].setAttribute('data-mark-container-state', 'occupied-by-player-one');

                marks[i].disabled = true;

                checkIfTheGameHasBeenWon();
                if (obj.gameHasBeenWon === false) {
        
                    obj.isXsTurn = false;
                    changingTheTurns();
                };
            };
        } else {
            if (markState === 'empty') {
                markContainerChild.innerHTML = obj.markSVGs[obj.playerMarkTwo];

                marks[i].appendChild(markContainerChild);
                marks[i].setAttribute('data-mark-container-state', 'occupied-by-player-two');

                marks[i].disabled = true;

                if (obj.gameHasBeenWon === false) {
        
                    obj.isXsTurn = true;
                    changingTheTurns();
                };
            };
        };
    });
};

// HANDLING THE SCORING

function handlingTheScoring() {
    if (obj.playerMark === 'X') {
        markXText.textContent = 'X (PLAYER 1)';
        markOText.textContent = 'O (PLAYER 2)';
    } else {
        markXText.textContent = 'X (PLAYER 2)';
        markOText.textContent = 'O (PLAYER 1)';
    };
};

// STARTING THE GAME

function startingTheGame() {
    handlingTheScoring();
};

startingTheGame();

// CHECKING IF THE HAS BEEN WON

function checkIfTheGameHasBeenWon() {
    let marks = {
        markIndexes: [],
        markStates: [],
    };
    const markState = [3, 6, 9];

    // HORIZONTAL
    for (let i = 0; i < markContainers.length; i++) {
        for (let iterator = 0; iterator < markContainers.length; iterator++) {
            marks.markIndexes.push(markContainers[i].children[iterator].getAttribute('data-mark-container-index'));
            marks.markStates.push(markContainers[i].children[iterator].getAttribute('data-mark-container-state'));
            const player = obj.playerMark === 'X' ? 'occupied-by-player-one' : 'occupied-by-player-two';

            if (obj.isXsTurn === true) {
                const {markStates, markIndexes} = marks;

            }
        };
    };

    console.log(marks);
};

/* checkIfTheGameHasBeenWon(); */