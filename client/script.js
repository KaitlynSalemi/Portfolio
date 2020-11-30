const form = document.querySelector('.section-contact__form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const messageInput = document.querySelector('.message-textarea');
const sent = document.querySelector('.section-contact__form__sent');

function copyToClipBoard() {
  var copyText = document.getElementById('myEmail');

  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand('copy');

  alert('Copied the text: ' + copyText.value);
}

function sentMessage(message) {
  //change the innerHtml of the sent element
  sent.innerHTML = message;
}

function checkInputs() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '') {
    //change sent message
    sentMessage('Name input cannot be blank.');
  } else if (email === '') {
    sentMessage('Email input cannot be blank.');
  } else if (message === '') {
    sentMessage('Message input cannot be blank.');
  } else {
    //the message has been sent
    sentMessage('Your message has successfully sent!');
    form.reset();
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const formData = {
    name,
    email,
    message,
  };

  $.post('/email', formData);

  checkInputs();
});
