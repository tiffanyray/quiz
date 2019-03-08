//importing modal js file
import modal from './modal.js';

$(document).ready(function() {

var form = document.getElementById('quizForm');

//Event handler to listen for submit button
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const questionOneVal = $('input[name=q1]:checked', form).val();
    const questionTwoVal = $('input[name=q2]:checked', form).val();
    const questionThreeVal = $('input[name=q3]:checked', form).val();
    const questionFourVal = $('input[name=q4]:checked', form).val();
    const questionFiveVal = $('input[name=q5]:checked', form).val();
    // console.log(questionOneVal);
    // console.log(questionTwoVal);
    // console.log(questionThreeVal);
    // console.log(questionFourVal);
    // console.log(questionFiveVal);

    let message = '';

    //question two 
    if (questionTwoVal === 'b') {
        message += 'Make sure you have a good tent and sleeping bag. '
    }

    //question three
    if (questionThreeVal === 'a') {
        message += 'You need more than a day before it\'s considered camping. '
    } else if (questionThreeVal === 'd') {
        message += 'I wish I could camp forever too! '
    }

    //question five 
    if (questionFiveVal === 'a') {
        message = 'Don\'t go. That sounds to dangerous...'
    } else if (questionFiveVal === 'd') {
        message += 'Bring plenty of water! '
    } 

    if (message === '') {
        message = 'Go and have fun!'
    }

    //If they don't know anything.. At bottom to make message appear without other comments.
    if (questionOneVal === 'a' || questionFourVal === 'a' || questionFourVal === 'b') {
        message = 'Do some more research about camping. '
    }
    

    modal.open({content: message });
    form.reset();
});




}); //End of document ready function