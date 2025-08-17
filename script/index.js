const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('header-menu');

hamburger.addEventListener('click', () => {
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});


