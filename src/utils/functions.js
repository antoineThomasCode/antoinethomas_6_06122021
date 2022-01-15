// -- > check firstname and lastname 
function nameIsCorrect(value) {
    value = value.trim();
    if(value != "" && value.length >= 2 && value != null){
        return true;
    }
    return false;
}
// -- > ckeck if the valuse of email input is correct 
function emailIsCorrect(value){
    const regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

    if (regEmail.test(value)){    
    return true;
    } 
    return false;
}
// ** function to create ERROR container and display message inside  **//
const createErrorMessage = (message) => {
    const errorMessage = document.createElement('div');
    errorMessage.className = "error";
    errorMessage.innerHTML = message;
    return errorMessage;
}
const displayErrorMessage = (input, errorMessage) => {
    input.classList.add('error--bg');
    input.insertAdjacentElement('afterend', createErrorMessage(`${errorMessage}`));
}


export {nameIsCorrect, emailIsCorrect, createErrorMessage, displayErrorMessage}