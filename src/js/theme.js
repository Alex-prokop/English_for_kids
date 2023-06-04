export const switcher = document.querySelector('#myonoffswitch');
let currentPage = 'Main page';

export function changeBgDependingOnMode() {
  const mainCards = document.querySelectorAll('.main-card');
  const playModeClass = 'play-mode';

  if (!switcher.checked) {
    mainCards.forEach((item) => item.classList.add(playModeClass));
    menu.classList.add(playModeClass);
  } else {
    mainCards.forEach((item) => item.classList.remove(playModeClass));
    menu.classList.remove(playModeClass);
  }
}

export function addActiveLink() {
  const menuLinks = document.querySelectorAll('#menu a');
  const activeClass = 'active';

  menuLinks.forEach((link) => {
    const linkText = link.childNodes[0].innerHTML;
    if (currentPage === linkText) {
      link.classList.add(activeClass);
    } else {
      link.classList.remove(activeClass);
    }
  });
}
