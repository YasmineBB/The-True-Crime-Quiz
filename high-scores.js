const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');
const highScoresList = document.getElementById('high-scores-list');

const highScores = JSON.parse(localStorage.getItem('high-scores')) || [];

highScores.map(score => {
    console.log(score);
})
open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});