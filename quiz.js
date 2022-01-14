const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('question-counter');
const scoreText = document.getElementById('score');

// Modal - not showing choice text when code for modal is placed on this page??


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let correctCounter = 1;
const maxQuestions = 6;


let questions = [{
        question: 'What did John Wayne Gacy request to have for his last meal?',
        choice1: 'Two pints of mint chocolate chip ice cream',
        choice2: 'A bucket of Kentucky Fried Chicken',
        choice3: 'Pizza and a hot chocolate',
        choice4: 'A cup of coffee and a cigar',
        answer: 2
    },
    {
        question: 'Who falsely confessed to a murder, also incriminating her boyfriend who she wanted behind bars, resulting in more crimes being commited by the actual culprit dubbed the Happy Face Killer?',
        choice1: 'Laverne Pavilnac',
        choice2: 'Paula Dietz',
        choice3: 'Linda Yates',
        choice4: 'Judith Lynch',
        answer: 1
    },
    {
        question: 'What weapon did Aileen Wuornos use to kill her victims?',
        choice1: '.25 caliber pistol',
        choice2: '12 gauge shotgun',
        choice3: '.22 caliber rifle',
        choice4: '.22 caliber revolver',
        answer: 4
    },
    {
        question: 'Before being infamously known as the Night Stalker, what was the first moniker given to Richard Ramirez?',
        choice1: 'Son of Sam',
        choice2: 'The Cross-Country Killer',
        choice3: 'The Co-Ed Killer',
        choice4: 'The Valley Intruder',
        answer: 4
    },
    {
        question: 'What serial killer was the inspiration for the Clint Eastwood film Dirty Harry?',
        choice1: 'The Mad Butcher, Ed Gein',
        choice2: 'The Zodiac Killer',
        choice3: 'The Dating Game Killer, Rodney Alcala',
        choice4: 'The Green River Killer, Gary Ridgway',
        answer: 2
    },
    {
        question: 'Which of the following serial killers had the highest IQ at 145?',
        choice1: 'Fred West',
        choice2: 'Ted Bundy',
        choice3: 'Ed Kemper',
        choice4: 'Richard Chase',
        answer: 3
    }

]


// (Dont forget to add remaining questions)


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = questions;
    console.log(availableQuestions);
    getNewQuestion();
};


getNewQuestion = () => {

    /* DOUBLE CHECK, DIDNT INPUT AT FIRST*/
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        return window.location.assign('./end-page.html');
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter} / ${maxQuestions}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply;

        selectedAnswer == currentQuestion.answer ? classToApply = 'correct' : classToApply = 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(correctCounter)
            Swal.fire({
                color: '#FAEBD7',
                icon: 'success',
                title: 'Correct',
                text: 'You really know your stuff! 😎',
                timer: 2000,
                background: '#33CC00',
                showConfirmButton: false

            })
        } else if (classToApply === 'incorrect') {
            Swal.fire({
                icon: 'error',
                title: 'Oops, that was incorrect...💀',
                text: "But keep playing and you'll sure find out!",
                color: '#FAEBD7',
                timer: 2000,
                background: '#FF0000',
                showConfirmButton: false

            });
        };

        selectedChoice.parentElement.classList.add(classToApply);



        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 2000);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}


startGame();