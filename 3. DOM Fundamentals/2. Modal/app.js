'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');

showModal.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
});

// ALTERNATE
// for (let i = 0; i < showModal.length; i++) {
//     showModal[i].addEventListener('click', () => {
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     });
// }

const hideModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

overlay.addEventListener('click', hideModal);
closeModalButton.addEventListener('click', hideModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        hideModal();
    }
})