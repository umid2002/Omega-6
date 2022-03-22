// Hamburger
const hamburgerElement = document.querySelector('.fa-bars');
const menuListElement = document.querySelector('.menu-list');

hamburgerElement.addEventListener('click', ()=>{
  menuListElement.classList.toggle('hide-list')
})