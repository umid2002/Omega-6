// Hamburger
const hamburgerElement = document.querySelector('.fa-bars');
const menuListElement = document.querySelector('.menu-list');

hamburgerElement.addEventListener('click', ()=>{
  menuListElement.classList.toggle('hide-list')
})

window.addEventListener("scroll", () => {
  menuListElement.classList.add('hide-list')
})


// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
