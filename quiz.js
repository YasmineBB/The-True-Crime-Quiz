const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('question-counter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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

// Constants

const CORRECT_COUNTER = 1;
// (Dont forget to add remaining questions)
const MAX_QUESTIONS = 6;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};


startGame();