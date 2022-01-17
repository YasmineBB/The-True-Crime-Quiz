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
const maxQuestions = 15;


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
    },
    {
        question: 'The 2005 movie Wolf Creek was partly inspired by which Australian serial killer?',
        choice1: 'Martin Bryant',
        choice2: 'Kim Leanne Snibson',
        choice3: 'Ivan Milat',
        choice4: 'Matthew De Gruchy',
        answer: 3
    },
    {
        question: "In 2019, which serial killer made it into third place of Wikipedia's most viewed articles?",
        choice1: 'Ted Bundy',
        choice2: 'Richard Ramirez',
        choice3: 'Jeffrey Dahmer',
        choice4: 'Jack the Ripper',
        answer: 1
    },
    {
        question: 'Herbert Mullin, who murdered 13 victims in California during the 1970s, claimed his murders were an act of sacrifice that would prevent what?',
        choice1: 'Global Warming',
        choice2: 'An Apocalypse',
        choice3: 'Earthquakes',
        choice4: 'An Alien Invasion',
        answer: 3
    },
    {
        question: "Manson girl Ruth Ann Moorhouse’ protestant father Dean tried to track her down several times. On his final attempt, he was introduced to acid, became a Manson believer and ended up staying in the cult leader's Californian mansion. In which famous musicians' houses did this occur?",
        choice1: 'Dennis Wilson',
        choice2: 'Neil Young',
        choice3: 'Paul McCartney',
        choice4: 'Mike Love',
        answer: 1
    },
    {
        question: 'Thomas J Grasso’s final words before he was executed by lethal injection were:',
        choice1: "I don't even know why I'm here.",
        choice2: "I didn’t want my Spaghettio’s. I got spaghetti. I want the press to know this.",
        choice3: "I’ll be in Hell before you start breakfast, boys. Let her rip.",
        choice4: "Yes, hurry it up, you Hoosier bastard! I could kill a dozen men while you're screwing around!",
        answer: 2
    },
    {
        question: 'Which former Church congregation president and Boy Scout leader led a double life, going on to become known as the BTK Killer?',
        choice1: 'Ed Gein',
        choice2: 'Sam Berkowitz',
        choice3: 'David Berkowitz',
        choice4: 'Dennis Rader',
        answer: 4
    },
    {
        question: 'The Axeman of New Orleans, an unidentified killer who went on a killing spree in 1918-19, supposedly wrote a letter that was published in the local newspaper stating that he would spare those he found doing which of the following:',
        choice1: 'Playing Jazz music',
        choice2: 'Going to Church',
        choice3: 'Wearing red',
        choice4: 'Eating together as a family',
        answer: 1
    },
    {
        question: "Who is named as ‘No Name Maddox’ on their birth certificate?",
        choice1: 'Andrew Cunanan',
        choice2: 'Charles Manson',
        choice3: 'Randy Kraft',
        choice4: 'Charles Ng',
        answer: 2
    },
    {
        question: 'Which serial killer duo dubbed the vehicle they used, the Murder Mack?',
        choice1: 'The Love Slave Killers, Gerald and Charlene Gallego',
        choice2: 'The Lonely Hearts Killers, Martha Beck and Raymond Martinez Fernandez',
        choice3: 'The Hillside Stranglers, Kenneth Bianchi & Angelo Buono',
        choice4: 'The Toolbox Killers, Lawrence Bittaker and Roy Norris',
        answer: 4
    },

]


// (Dont forget to add remaining questions)

/**
 * Starts the game
 */
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = questions;
    console.log(availableQuestions);
    getNewQuestion();
};

/**
 * Gets new question
 */

function getNewQuestion() {

    /* DOUBLE CHECK, DIDNT INPUT AT FIRST*/
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score);
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
                color: '#201d1d',
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
                color: '#fefefe',
                timer: 2000,
                background: '#b50000',
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

/**
 * Increments score
 */

function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}


startGame();