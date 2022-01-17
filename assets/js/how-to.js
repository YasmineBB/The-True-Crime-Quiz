const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

/**
 * Opens and closes the modal
 */

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});