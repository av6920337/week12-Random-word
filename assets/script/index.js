function interactionWithUser(){
    alert(' Hi! Glad to see you there 😊\n Press the button and you will get a random word.\n Enjoy!');
}
interactionWithUser();

const btn = document.querySelector('.btn');
const modalOverlay = document.getElementById('modalOverlay');
const spanText = document.querySelector('.spanText');
const modalBtn = document.querySelector('.modalBtn');

btn.addEventListener('click', function createRandomword(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const firstRandomLetter = Math.floor(Math.random() * alphabet.length);
    const secondRandomLetter = Math.floor(Math.random() * alphabet.length);
    const thirdRandomLetter = Math.floor(Math.random() * alphabet.length);
    const fourthRandomLetter = Math.floor(Math.random() * alphabet.length);

    modalOverlay.style.display = 'flex';
    spanText.textContent = `Yours random word is:
    ${alphabet[firstRandomLetter]}${alphabet[secondRandomLetter]}${alphabet[thirdRandomLetter]}${alphabet[fourthRandomLetter]}`;

    modalBtn.addEventListener('click',function(){
        modalOverlay.style.display = 'none';
    });
});

// console.log(alphabet[firstRandomLetter] + alphabet[secondRandomLetter] + alphabet[thirdRandomLetter] + alphabet[fourthRandomLetter]);
