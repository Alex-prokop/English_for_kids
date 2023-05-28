export default class Menu {
  constructor() {
    this.burgerMenuButton = document.querySelector('.burger-menu__button');
    this.burgerMenuNav = document.querySelector('.burger-menu__nav');
    this.checkboxInput = document.querySelector('.checkbox__input');
    this.cards = document.querySelectorAll('.card');
  }

  init() {
    this.burgerMenuButton.addEventListener('click', this.toggleMenu.bind(this));
    this.checkboxInput.addEventListener('change', this.toggleMode.bind(this));
  }

  toggleMenu() {
    this.burgerMenuNav.classList.toggle('open');
  }

  toggleMode() {
    const isGameMode = this.checkboxInput.checked;
    this.cards.forEach((card) => {
      if (isGameMode) {
        card.classList.add('game-mode');
      } else {
        card.classList.remove('game-mode');
      }
    });
  }
}
