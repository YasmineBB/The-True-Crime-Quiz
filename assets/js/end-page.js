const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const maxHighScores = 5;

finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

const saveHighScore = (e) => {

    Swal.fire({
        icon: 'success',
        title: 'Your score has been saved <br> 👏 <br> Why not challenge your score or share with friends and family!',
        background: 'rgb(78, 78, 78)',
        color: 'rgb(250, 235, 215)',
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 3000
    });

    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

};