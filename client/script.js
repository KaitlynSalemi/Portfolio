// document.querySelector(".navigation__heading").innerHTML = "Java Script file is working.";
const form = document.querySelector(".section-contact__form");
const name = document.querySelector(".name-input");
const email = document.querySelector(".email-input");
const message = document.querySelector(".message-textarea");
const sent = document.querySelector(".section-contact__form__sent");

function sentMessage(message) {
    //change the innerHtml of the sent element
    sent.innerHTML = message
}

function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(nameValue === '') {
        //change sent message
        sentMessage("Name input cannot be blank.");
    } else if(emailValue === '') {
        sentMessage("Email input cannot be blank.");
    } else if(messageValue === '') {
        sentMessage("Message input cannot be blank.");
    } else {
        //the message has been sent
        sentMessage("Your message has successfully sent!"); 
        form.reset();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});