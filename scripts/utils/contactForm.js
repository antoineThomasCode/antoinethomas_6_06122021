// open & close FormModal 
const modal = document.getElementById("contact_modal");
function displayModal() {
	modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}
// validate form before sending data to the backend
function validate(){

    // field values recovery
    const formContent = document.getElementById('modal-content')
    let isErrors = false;
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');

    // delete error class 
    document.querySelectorAll('.error').forEach(error => error.remove());
    document.querySelectorAll('.error--bg').forEach(error => error.classList.remove('error--bg'));

    // find functions using to validate values in ---> functions.js 
    if(!nameIsCorrect(firstName.value)){
        console.log('ok1')
        isErrors = true
        displayErrorMessage(firstName, 'Veuillez entrer 2 caractères ou plus pour le prénom.')
    }
    if(!nameIsCorrect(lastName.value)){
        console.log('ok2')
        isErrors = true
        displayErrorMessage(lastName, 'Veuillez entrer 2 caractères ou plus pour le nom.')
    }
    if(!emailIsCorrect(email.value)){
        console.log('ok3')
        displayErrorMessage(email, 'Veuillez entrer une adresse mail valide.')
    }
    // check if an error was detected 
    if(isErrors){
    
    console.log('erreur dans le formulaire')
    return false; 

    } else {
        const messageForPhotographer = {
            firstname: firstName.value,
            lastname: lastName.value,
            email: email.value,
            message: message.value
        };

        console.log(messageForPhotographer)
        
        const formData = document.getElementById('formData')
        formData.style.display = 'none'
        const messageSending = document.createElement('div')
        messageSending.id = "message-sending"; 
        formContent.append(messageSending)
        messageSending.innerHTML ='Votre message à bien été envoyé au photographe'
        const buttonClose = document.createElement('button')
        buttonClose.classList.add('contact_button')
        buttonClose.innerHTML = "Fermer";
        buttonClose.addEventListener ("click", closeModal);
        formContent.appendChild(buttonClose)
        return false;    
    }
}
