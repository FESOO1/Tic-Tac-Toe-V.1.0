const pickMarkButton = document.querySelector('#pickMarkButton');
let isMarkChanged = false;

// PICK A MARK

function pickAMark() {
    if (isMarkChanged === false) {
        pickMarkButton.classList.add('main-menu-pick-mark-button-changed');
        
        isMarkChanged = true;
    } else {
        pickMarkButton.classList.remove('main-menu-pick-mark-button-changed');
        
        isMarkChanged = false;
    };
};

// INITIALIZE BUTTON
pickMarkButton.addEventListener('click', pickAMark);