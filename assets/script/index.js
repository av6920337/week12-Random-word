// function interactionWithUser(){
//     alert(' Hello 😊\n Press the button and you will get a random word.\n Enjoy!');
// }
// interactionWithUser();

const btn = document.querySelector('.btn');


btn.addEventListener('click', function createRandomword(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const firstRandomLetter = Math.floor(Math.random() * alphabet.length);
    const secondRandomLetter = Math.floor(Math.random() * alphabet.length);
    const thirdRandomLetter = Math.floor(Math.random() * alphabet.length);
    const fourthRandomLetter = Math.floor(Math.random() * alphabet.length);

    console.log(alphabet[firstRandomLetter] + alphabet[secondRandomLetter] + alphabet[thirdRandomLetter] + alphabet[fourthRandomLetter])
    // const spanWord = document.createElement('span');
    // spanWord.textContent =alphabet[firstRandomLetter] + alphabet[secondRandomLetter] + alphabet[thirdRandomLetter] + alphabet[fourthRandomLetter];
    // .append(spanWord);
});
