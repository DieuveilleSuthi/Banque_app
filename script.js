'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Scroll to

const section1 = document.querySelector('#section--1');
const scrollTo = document.querySelector('.btn--scroll-to');

scrollTo.addEventListener(
  'click', function(){
    const sect1 = section1.getBoundingClientRect();

    console.log(sect1);
    console.log(pageXOffset, pageYOffset);
    // scrolling

    window.scrollTo(
      sect1.left + window.pageXOffset,
      sect1.top + window.pageYOffset
    )
  }
)