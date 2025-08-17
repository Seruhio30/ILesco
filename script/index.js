



  const navButtom = document.querySelector('#hamburger');
  const navLinks = document.querySelector('#header-menu');

  navButtom.addEventListener('click', () => {

      navButtom.classList.toggle('show')
      navLinks.classList.toggle('show')
  });
