// const openScores = document.getElementById('open-scores');
// // const modal_container = document.getElementById('modal-container');
// // const close = document.getElementById('close');
// // const highScoresList = document.getElementById('high-scores-list');

// const highScores = JSON.parse(localStorage.getItem('high-scores')) || [];

// const scoreSection = document.getElementById('highScore')
// const howToSection = document.getElementById('howTo')

// openScores.addEventListener('click', () => {
//     scoreSection.classList.remove('hide');
//     howToSection.classList.add('hide');
//     modal_container.classList.add('show');
// });
// // highScores.map(score => {
// //     console.log(score);
// // })
// // open.addEventListener('click', () => {
// //     modal_container.classList.add('show');
// // });

// // close.addEventListener('click', () => {
// //     modal_container.classList.remove('show');
// // });

const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores.map(score => {
    return (`<li class='high-score'>${score.name} : ${score.score}</li>`);
}).join('');