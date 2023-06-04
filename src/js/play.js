export default class Play {
  constructor() {
    this.mode = 'train';
    this.changeMode = this.changeMode.bind(this);
    this.startGame = this.startGame.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.gameLogic = this.gameLogic.bind(this);
    this.finishGame = this.finishGame.bind(this);
  }

  init() {
    this.addEvents();
  }

  addEvents() {
    this.switcher = document.querySelector('#myonoffswitch');
    this.switcher.addEventListener('click', this.changeMode);
  }

  changeCardsStyle() {
    const cards = document.querySelectorAll('.card');
    const rotates = document.querySelectorAll('.rotate');
    const cardHeaders = document.querySelectorAll('.card-header');

    if (this.mode === 'play') {
      this.applyPlayModeStyles(cards, rotates, cardHeaders);
    } else {
      this.applyTrainModeStyles(cards, rotates, cardHeaders);
    }
  }

  applyPlayModeStyles(cards, rotates, cardHeaders) {
    cards.forEach((card) => {
      card.classList.add('card-cover');
    });
    rotates.forEach((card) => {
      card.classList.add('none');
    });
    cardHeaders.forEach((card) => {
      card.classList.add('none');
    });

    const btn = document.querySelector('.btn');
    if (btn && btn.classList.contains('none')) {
      btn.classList.remove('none');
    }
  }

  applyTrainModeStyles(cards, rotates, cardHeaders) {
    cards.forEach((card) => {
      card.classList.remove('card-cover');
    });
    rotates.forEach((card) => {
      card.classList.remove('none');
    });
    cardHeaders.forEach((card) => {
      card.classList.remove('none');
    });

    const btn = document.querySelector('.btn');
    if (btn && !btn.classList.contains('none')) {
      btn.classList.add('none');
    }
  }

  startGame() {
    this.initializeGameVariables();
    this.prepareWordsOnPage();
    this.gameLogic();
  }

  initializeGameVariables() {
    this.startBtn = document.querySelector('.btn');
    this.startBtn.classList.add('repeat');
    this.mistakes = 0;
    this.startBtn.removeEventListener('click', this.startGame);
    this.results = JSON.parse(localStorage.getItem('play'));

    if (this.results[this.pageIndex]) {
      this.targetCat = this.results[this.pageIndex].slice();
      this.difficultWords = null;
    }

    if (this.difficultWords) {
      this.targetCat = this.difficultWords;
    }
  }

  prepareWordsOnPage() {
    this.wordsOnPage = [];
    this.wordsLeftToGuess = 8;

    document.querySelectorAll('.card').forEach((card) => {
      this.wordsOnPage.push(card.dataset.word);
    });

    this.wordsOnPage.sort(() => Math.random() - 0.5);
  }

  gameLogic() {
    this.playAudio();

    document.querySelector('.repeat').addEventListener('click', () => {
      this.audio.play();
    });

    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', this.checkWord);
    });
  }

  playAudio() {
    this.audio = document.querySelector('.audio');
    if (!this.audio) return;
    this.audio.src = `./assets/audio/${
      this.wordsOnPage[this.wordsOnPage.length - 1]
    }.mp3`;
    this.audio.play();
  }

  checkWord(e) {
    if (this.mode === 'train' || !this.wordsOnPage.length) return;

    this.audioStar = document.querySelector('.starSound');
    if (!this.audioStar) return;

    this.processClickedWord(e);
  }

  processClickedWord(e) {
    let clickedWord = e.target.closest('.card').dataset.word;
    let star = document.createElement('div');
    let checkWord = this.wordsOnPage[this.wordsOnPage.length - 1];
    let currentWord = this.targetCat.find((word) => word.word === checkWord);

    this.updateGameState(clickedWord, star, currentWord, e);
  }

  updateGameState(clickedWord, star, currentWord, e) {
    if (clickedWord === this.wordsOnPage[this.wordsOnPage.length - 1]) {
      this.handleCorrectWord(star, currentWord, e);
    } else {
      this.handleIncorrectWord(star, currentWord, e);
    }

    currentWord.errors = Math.round(
      +currentWord.wrong + (+currentWord.correct / +currentWord.wrong) * 100
    );
    document.querySelector('.rating').append(star);
    this.audioStar.play();
  }

  handleCorrectWord(star, currentWord, e) {
    star.classList.add('star-win');
    this.audioStar.src = './assets/audio/correct.mp3';
    e.target.classList.add('inactive');
    currentWord.correct += 1;

    if (this.wordsOnPage.length > 1) {
      this.wordsOnPage.pop();
      setTimeout(this.gameLogic, 1000);
    } else {
      setTimeout(this.finishGame, 300);
    }
  }

  handleIncorrectWord(star, currentWord, e) {
    star.classList.add('star-error');
    currentWord.wrong += 1;

    if (e.target.classList.contains('inactive')) return;
    this.audioStar.src = './assets/audio/error.mp3';
    this.mistakes += 1;
  }

  finishGame() {
    this.displayResults();
    this.audioStar.src =
      this.mistakes === 0
        ? './assets/audio/success.mp3'
        : './assets/audio/failure.mp3';
    this.audioStar.play();
    this.addResultsToLocalStorage();
  }

  displayResults() {
    const mistakesMsg =
      this.mistakes === 0 ? 'WIN!' : `${this.mistakes} errors`;
    const finishImg = document.querySelector('.modal img');
    finishImg.src =
      this.mistakes === 0
        ? './assets/img/success.jpg'
        : './assets/img/failure.png';
    const finishText = document.querySelector('.modal p');
    finishText.innerHTML = mistakesMsg;
    document.querySelector('.modal-overlay').classList.remove('modal_closed');
    document.querySelector('.modal').classList.remove('modal_closed');
  }

  addResultsToLocalStorage() {
    if (this.difficultWords) return;
    this.results[this.pageIndex] = this.targetCat;
    localStorage.setItem('play', JSON.stringify(this.results));
  }

  changeMode() {
    if (!this.switcher.checked) {
      this.mode = 'play';
      this.preparePlayMode();
    } else {
      this.mode = 'train';
      this.prepareTrainMode();
    }
    this.changeCardsStyle();
  }

  preparePlayMode() {
    this.startBtn = document.querySelector('.btn');
    if (this.startBtn) {
      if (this.startBtn.classList.contains('repeat')) {
        this.startBtn.classList.remove('repeat');
      }
      this.startBtn.addEventListener('click', this.startGame);
    }
  }

  prepareTrainMode() {
    if (document.querySelector('.rating')) {
      document.querySelector('.rating').innerHTML = '';
    }
    document.querySelectorAll('.front').forEach((card) => {
      if (card.classList.contains('inactive')) {
        card.classList.remove('inactive');
      }
    });
  }
}
