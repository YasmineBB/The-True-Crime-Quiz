/**
 * Code taken from the Build a Quiz Playlist from James Q Quick. 
 */
const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores.map(score => {
    return (`<li class='high-score'>${score.name} : ${score.score}</li>`);
}).join('');