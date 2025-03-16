// TURN
const turnSvgContainer = document.querySelector('.main-tic-tac-toe-top-turn-svg-container');

// MARK CONTAINERS
const markContainers = document.querySelectorAll('.main-tic-tac-toe-middle-inner');
const marks = document.querySelectorAll('.main-tic-tac-toe-middle-itself');
const obj = {
    isXsTurn: true,
    playerMark: 'X',
    isPlayingAgainstComputer: false,
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
    marks[i].addEventListener('mouseenter', () => {
        const markContainerChild = document.createElement('div');
        markContainerChild.classList.add('main-tic-tac-toe-middle-itself-svg-container');

        if (obj.playerMark === 'X') {
            markContainerChild.innerHTML = '<svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD"></path></svg>';
        } else {
            markContainerChild.innerHTML = '<svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"></path></svg>';
        };

        marks[i].appendChild(markContainerChild);
    });

    // REMOVING THE ELEMENT
    marks[i].addEventListener('mouseleave', () => {
        marks[i].innerHTML = '';
    });
};

// STARTING THE GAME

function startingTheGame() {

};

// CHECKING WHO THE PLAYER IS PLAYING AGAINST

function checkingWhoeThePlayerIsPlayingAgainst() {
    if (obj.isPlayingAgainstComputer === false) {

    } else {

    };
};