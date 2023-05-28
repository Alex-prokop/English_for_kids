const burgerMenu = (selector) => {
  let menu = document.querySelector(selector);
  let button = menu.querySelector('.burger-menu__button');
  let links = menu.querySelectorAll('.burger-menu__link');
  let overlay = menu.querySelector('.burger-menu__overlay');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.forEach((link) => {
    link.addEventListener('click', () => toggleMenu());
  });

  overlay.addEventListener('click', () => toggleMenu());

  function toggleMenu() {
    menu.classList.toggle('burger-menu_active');

    if (menu.classList.contains('burger-menu_active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }
};

burgerMenu('.burger-menu');
