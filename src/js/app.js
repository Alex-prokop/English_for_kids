import cards from './cards';
import HomePageComponent from './HomePageComponent';
import StatisticComponent from './StatisticComponent';
import CardsComponent from './CardsComponent';
import { changeBgDependingOnMode } from './theme';
import { addActiveLink, switcher } from './theme.js';
import { rotateCard, rotateCardBack } from './rotateCard';
import { resetWords, sortStat } from './Statistic';
import Play from './play';
const navInput = document.querySelector('#menuToggle > input[type=checkbox]');

const play = new Play();
let cardsFromStorage;
try {
  cardsFromStorage = JSON.parse(localStorage.getItem('play'));
} catch (e) {
  writeToLocalStorage();
  cardsFromStorage = JSON.parse(localStorage.getItem('play'));
}
let currentPage = 'Main page';

function renderCards(list) {
  if (currentPage === 'Main page') {
    document.querySelector('.main-wrapper').innerHTML =
      HomePageComponent.render();
    changeBgDependingOnMode();
    openCatPage();
  } else if (currentPage === 'Statistic') {
    cardsFromStorage = JSON.parse(localStorage.getItem('play'));
    const heading = `
    <div class ="stat-wrapper">
      <div class="stat-btn-wrapper">
        <button class="stat-btn" id="repeat">Repeat Difficult Words</button>
        <button class="stat-btn" id="reset">Reset</button>
      </div>
      <div class="table-heading">
        <div class="stat-word">Word</div>
        <div class="stat-translation">Translation</div>
        <div class="stat-asked">Trained</div>
        <div class="stat-correct">Correct</div>
        <div class="stat-wrong">Wrong</div>
        <div class="stat-errors">% errors</div>
      </div>
      <div class="table"></div>
    </div>`;
    document.querySelector('.main-wrapper').innerHTML = heading;
    document.querySelector('.table').innerHTML =
      StatisticComponent.render(cardsFromStorage);
    document.querySelector('#repeat').addEventListener('click', repeatWords);
    document.querySelector('#reset').addEventListener('click', resetWords);
  } else {
    if (currentPage === 'Difficult words') {
      document.querySelector('.main-wrapper').innerHTML =
        CardsComponent.render(list);
    } else {
      const categoryInCardsIndex = cards[0].indexOf(currentPage) + 1;
      const parametersToRender = cards[categoryInCardsIndex];
      document.querySelector('.main-wrapper').innerHTML =
        CardsComponent.render(parametersToRender);
      play.pageIndex = categoryInCardsIndex;
    }
    if (!switcher.checked) {
      play.changeCardsStyle();
    }
    document
      .querySelector('.cards-block')
      .addEventListener('click', rotateCard);
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('mouseleave', rotateCardBack);
      card.addEventListener('click', playSound);
    });
    document.querySelector('.btn').addEventListener('click', play.startGame);
  }
}

function openCatPage() {
  document.querySelector('.cards-block').addEventListener('click', (e) => {
    if (!e.target.closest('.main-card')) return;
    const targetCategory = e.target.closest('.main-card').innerText;
    if (!targetCategory) return;
    currentPage = targetCategory;
    renderCards();
    addActiveLink();
  });
}

function playSound(e) {
  const targetCard = e.target.closest('.card');
  if (!switcher.checked) return;
  if (
    targetCard.classList.contains('translate') ||
    e.target.classList.contains('rotate')
  ) {
    return;
  }
  const audio = document.querySelector('.audio');
  if (!audio) return;
  audio.src = `./assets/audio/${targetCard.dataset.word}.mp3`;
  audio.play();
  addTrain(targetCard.dataset.word);
}
function addTrain(word) {
  const results = cardsFromStorage;
  if (!results || !results[play.pageIndex]) return; // add this check
  const targetCat = results[play.pageIndex];
  const currentWord = targetCat.find((i) => {
    return i.word === word;
  });
  currentWord.asked += 1;
  results[play.pageIndex] = targetCat;
  localStorage.setItem('play', JSON.stringify(results));
}

function repeatWords() {
  const difficultWords = [];
  const categoryAmount = 8;
  for (let i = 0; i <= categoryAmount; i += 1) {
    for (let j = 0; j < categoryAmount; j += 1) {
      if (cardsFromStorage[i][j].errors > 0) {
        cardsFromStorage[i][
          j
        ].image = `./assets/img/${cardsFromStorage[i][j].word}.jpg`;

        difficultWords.push(cardsFromStorage[i][j]);
      }
    }
  }
  if (difficultWords.length === 0) {
    document.querySelector('.table').innerHTML =
      '<p>There are no difficult words</p>';
    return;
  }
  if (difficultWords.length > 8) {
    difficultWords.sort((a, b) => (a.errors > b.errors ? 1 : -1));
    difficultWords.splice(8, difficultWords.length - 8);
  }
  play.difficultWords = difficultWords;
  currentPage = 'Difficult words';
  renderCards(difficultWords);
}

function changePages(e) {
  if (e.target.tagName !== 'LI') return;
  navInput.checked = false;
  currentPage = e.target.innerHTML;
  renderCards();
  addActiveLink();
}
switcher.addEventListener('click', changeBgDependingOnMode);
menu.addEventListener('click', changePages);

document.addEventListener('click', (e) => {
  if (!document.querySelector('.modal').classList.contains('modal_closed')) {
    currentPage = 'Main page';
    renderCards();
    addActiveLink();
    document.querySelector('.modal-overlay').classList.add('modal_closed');
    document.querySelector('.modal').classList.add('modal_closed');
    return;
  }
  if (e.target.closest('.table-heading')) {
    const statHeading = document.querySelectorAll('.table-heading div');
    statHeading.forEach((elem) => {
      if (e.target === elem) {
        if (e.target.classList.contains('active-td')) {
          e.target.classList.toggle('reverse');
        } else {
          elem.classList.add('active-td');
        }
      } else {
        elem.classList.remove('active-td');
        elem.classList.remove('reverse');
      }
    });
    sortStat(e.target);
  }
  if (!e.target.closest('#menu') && !e.target.closest('#menuToggle')) {
    navInput.checked = false;
  }
});
renderCards();
play.init();

export default renderCards;
