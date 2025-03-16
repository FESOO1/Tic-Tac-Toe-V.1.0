const pickMarkButton = document.querySelector('#pickMarkButton');
let isMarkChanged = false;

// PICK A MARK

function pickAMark() {
    if (isMarkChanged === false) {
        pickMarkButton.classList.add('main-menu-pick-mark-button-changed');
        obj.playerMark = 'O';
        
        isMarkChanged = true;
    } else {
        obj.playerMark = 'X';
        pickMarkButton.classList.remove('main-menu-pick-mark-button-changed');
        
        isMarkChanged = false;
    };
};

// INITIALIZE BUTTON
pickMarkButton.addEventListener('click', pickAMark);