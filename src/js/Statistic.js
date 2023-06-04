import StatisticComponent from './StatisticComponent';

import cards from './cards';
let cardsFromStorage;

export function writeToLocalStorage() {
  const value = [cards[0]];
  const categoryAmount = 8;
  for (let i = 0; i < categoryAmount; i += 1) {
    const valueElement = [];
    for (let j = 0; j < categoryAmount; j += 1) {
      valueElement.push({
        word: cards[i + 1][j].word,
        translation: cards[i + 1][j].translation,
        correct: 0,
        wrong: 0,
        asked: 0,
        errors: 0,
      });
    }
    value.push(valueElement);
  }

  localStorage.setItem('play', JSON.stringify(value));
}

if (
  localStorage.getItem('play') === null ||
  localStorage.getItem('play').length < 100
) {
  writeToLocalStorage();
}

export function resetWords() {
  const categoryAmount = 8;
  for (let i = 1; i < categoryAmount; i += 1) {
    for (let j = 0; j < categoryAmount; j += 1) {
      cardsFromStorage[i][j].correct = 0;
      cardsFromStorage[i][j].wrong = 0;
      cardsFromStorage[i][j].asked = 0;
      cardsFromStorage[i][j].errors = 0;
    }
  }
  document.querySelector('.table').innerHTML =
    StatisticComponent.render(cardsFromStorage);
  localStorage.setItem('play', JSON.stringify(cardsFromStorage));
}

export function sortStat(target) {
  const storageCopy = JSON.parse(localStorage.getItem('play')).slice();
  function sortStatistic(key) {
    for (let i = 1; i < storageCopy.length; i += 1) {
      storageCopy[i].sort((a, b) => (a[key] > b[key] ? 1 : -1));
      if (target.classList.contains('reverse')) {
        storageCopy[i].reverse();
      }
    }
  }
  if (target.classList.contains('stat-word')) {
    sortStatistic('word');
  } else if (target.classList.contains('stat-translation')) {
    sortStatistic('translation');
  } else if (target.classList.contains('stat-asked')) {
    sortStatistic('asked');
  } else if (target.classList.contains('stat-correct')) {
    sortStatistic('correct');
  } else if (target.classList.contains('stat-wrong')) {
    sortStatistic('wrong');
  } else if (target.classList.contains('stat-errors')) {
    sortStatistic('errors');
  }
  document.querySelector('.table').innerHTML =
    StatisticComponent.render(storageCopy);
}
