$(document).ready(function() {
    
console.log('I\'m working!');

var form = document.getElementById('quizForm');

const getRadioVal = (name) => {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
};

//Event handler to listen for submit button
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;

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


    //question one adding to score
    if (questionOneVal === 'a' || questionOneVal === 'b') {
        score += 1;
    }

    //question two adding to score
    if (questionTwoVal === 'b') {
        score += 1;
    }

    //question three adding to score
    if (questionThreeVal === 'a') {
        score += 1;
    }

    //question four adding to score 
    if (questionFourVal === 'a') {
        score += 1;
    }

    //question five adding to score
    if (questionFiveVal === 'a' || questionFiveVal === 'b') {
        score += 1;
    }

    let message;

    if (score === 5) {
        message = 'Congrats, You are living life to the fullest!';
    } else if (score === 4) {
        message = 'Your doing good! Keep on working hard.';
    } else if (score === 3) {
        message = 'Do some inner reflection, it could help you.';
    } else if (score === 2) {
        message = 'Have you ever heard of personal development?';
    } else {
        message = 'Seek professional help...';
    }

    console.log(message);
    console.log(score);

});

}); //End of document ready function