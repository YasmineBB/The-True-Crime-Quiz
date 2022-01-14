const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('final-score');
// To get most recent score
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const maxHighScores = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) => {

    Swal.fire({
        icon: 'success',
        title: 'Your score has been saved 👏',
        background: 'rgb(78, 78, 78)',
        color: 'rgb(250, 235, 215)',
        showConfirmButton: false,
        timer: 2500
    })
    /*Swal.fire({
        color: 'rgb(107, 9, 9)',
        icon: 'success',
        title: 'Your score is saved',
        text: ' 😎',
        background: 'rgb(250, 235, 215)',

    })*/
    console.log('You clicked the save button!');
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    //Add alert once score is saved

    console.log(highScores)
}