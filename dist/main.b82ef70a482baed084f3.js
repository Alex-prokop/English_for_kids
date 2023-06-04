/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/CardsComponent.js":
/*!**********************************!*\
  !*** ./src/js/CardsComponent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CardsComponent = {
  render: function render(cards) {
    var renderElement = "\n      <div class=\"cards-block page\">\n        <div class=\"rating\"></div>";
    for (var i = 0; i < cards.length; i += 1) {
      var _cards$i = cards[i],
        word = _cards$i.word,
        image = _cards$i.image,
        translation = _cards$i.translation;
      renderElement += "\n        <div class=\"card-container\">\n          <div class=\"card\" data-word=\"".concat(word, "\">\n            <div class=\"front\" style=\"background-image: url(").concat(image, ");\">\n              <div class=\"card-header\">").concat(word, "</div>\n            </div>\n            <div class=\"back hidden\" style=\"background-image: url(").concat(image, ");\">\n              <div class=\"card-header\">").concat(translation, "</div>\n            </div>\n            <div class=\"rotate\"></div>\n          </div>\n        </div>");
    }
    renderElement += "\n      <div class=\"btn-wrapper\">\n        <button class=\"btn none\">Start game</button>\n      </div>\n      <audio class=\"audio\"></audio>\n      <audio class=\"starSound\"></audio>\n      </div>";
    return renderElement;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardsComponent);

/***/ }),

/***/ "./src/js/HomePageComponent.js":
/*!*************************************!*\
  !*** ./src/js/HomePageComponent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var cardElement = function cardElement(src, alt, text) {
  return "<div class=\"main-card\"><img src=\"".concat(src, "\" alt=\"").concat(alt, "\">").concat(text, "</div>");
};
var HomePageComponent = {
  render: function render() {
    var cards = [['./assets/img/dance.jpg', 'Action (set A)', 'Action (set A)'], ['./assets/img/swim.jpg', 'Action (set B)', 'Action (set B)'], ['./assets/img/one.jpg', 'Numbers', 'Numbers'], ['./assets/img/red.jpg', 'Colors', 'Colors'], ['./assets/img/rabbit.jpg', 'Animal (set A)', 'Animal (set A)'], ['./assets/img/bird.jpg', 'Animal (set B)', 'Animal (set B)'], ['./assets/img/dress.jpg', 'Clothes', 'Clothes'], ['./assets/img/happy.jpg', 'Emotions', 'Emotions']];
    var cardElements = cards.map(function (card) {
      return cardElement.apply(void 0, _toConsumableArray(card));
    }).join('');
    return "<div class=\"cards-block\">".concat(cardElements, "</div>");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePageComponent);

/***/ }),

/***/ "./src/js/Statistic.js":
/*!*****************************!*\
  !*** ./src/js/Statistic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetWords: () => (/* binding */ resetWords),
/* harmony export */   sortStat: () => (/* binding */ sortStat),
/* harmony export */   writeToLocalStorage: () => (/* binding */ writeToLocalStorage)
/* harmony export */ });
/* harmony import */ var _StatisticComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticComponent */ "./src/js/StatisticComponent.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ "./src/js/cards.js");


var cardsFromStorage;
function writeToLocalStorage() {
  var value = [_cards__WEBPACK_IMPORTED_MODULE_1__["default"][0]];
  var categoryAmount = 8;
  for (var i = 0; i < categoryAmount; i += 1) {
    var valueElement = [];
    for (var j = 0; j < categoryAmount; j += 1) {
      valueElement.push({
        word: _cards__WEBPACK_IMPORTED_MODULE_1__["default"][i + 1][j].word,
        translation: _cards__WEBPACK_IMPORTED_MODULE_1__["default"][i + 1][j].translation,
        correct: 0,
        wrong: 0,
        asked: 0,
        errors: 0
      });
    }
    value.push(valueElement);
  }
  localStorage.setItem('play', JSON.stringify(value));
}
if (localStorage.getItem('play') === null || localStorage.getItem('play').length < 100) {
  writeToLocalStorage();
}
function resetWords() {
  var categoryAmount = 8;
  for (var i = 1; i < categoryAmount; i += 1) {
    for (var j = 0; j < categoryAmount; j += 1) {
      cardsFromStorage[i][j].correct = 0;
      cardsFromStorage[i][j].wrong = 0;
      cardsFromStorage[i][j].asked = 0;
      cardsFromStorage[i][j].errors = 0;
    }
  }
  document.querySelector('.table').innerHTML = _StatisticComponent__WEBPACK_IMPORTED_MODULE_0__["default"].render(cardsFromStorage);
  localStorage.setItem('play', JSON.stringify(cardsFromStorage));
}
function sortStat(target) {
  var storageCopy = JSON.parse(localStorage.getItem('play')).slice();
  function sortStatistic(key) {
    for (var i = 1; i < storageCopy.length; i += 1) {
      storageCopy[i].sort(function (a, b) {
        return a[key] > b[key] ? 1 : -1;
      });
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
  document.querySelector('.table').innerHTML = _StatisticComponent__WEBPACK_IMPORTED_MODULE_0__["default"].render(storageCopy);
}

/***/ }),

/***/ "./src/js/StatisticComponent.js":
/*!**************************************!*\
  !*** ./src/js/StatisticComponent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var StatisticComponent = {
  render: function render(cards) {
    var tableRows = cards.map(function (category, i) {
      var _category = _toArray(category),
        categoryName = _category[0],
        categoryCards = _category.slice(1);
      var categoryHeading = "<tr class=\"cat-heading\"><td colspan=\"6\">".concat(categoryName, "</td></tr>");
      var wordRows = categoryCards.map(function (card) {
        var _card$correct = card.correct,
          correct = _card$correct === void 0 ? 0 : _card$correct,
          _card$wrong = card.wrong,
          wrong = _card$wrong === void 0 ? 0 : _card$wrong,
          _card$asked = card.asked,
          asked = _card$asked === void 0 ? 0 : _card$asked;
        var errors = +wrong + +correct === 0 ? 0 : Math.round(+wrong / (+wrong + +correct) * 100);
        return "<tr class=\"cat-word\">\n            <td>".concat(card.word, "</td>\n            <td>").concat(card.translation, "</td>\n            <td>").concat(asked, "</td>\n            <td>").concat(correct, "</td>\n            <td>").concat(wrong, "</td>\n            <td>").concat(errors, "</td>\n          </tr>");
      });
      return categoryHeading + wordRows.join('');
    });
    return "<table>".concat(tableRows.join(''), "</table>");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticComponent);

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/js/cards.js");
/* harmony import */ var _HomePageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePageComponent */ "./src/js/HomePageComponent.js");
/* harmony import */ var _StatisticComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatisticComponent */ "./src/js/StatisticComponent.js");
/* harmony import */ var _CardsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardsComponent */ "./src/js/CardsComponent.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.js */ "./src/js/theme.js");
/* harmony import */ var _rotateCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rotateCard */ "./src/js/rotateCard.js");
/* harmony import */ var _Statistic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Statistic */ "./src/js/Statistic.js");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./play */ "./src/js/play.js");









var navInput = document.querySelector('#menuToggle > input[type=checkbox]');
var play = new _play__WEBPACK_IMPORTED_MODULE_7__["default"]();
var cardsFromStorage;
try {
  cardsFromStorage = JSON.parse(localStorage.getItem('play'));
} catch (e) {
  writeToLocalStorage();
  cardsFromStorage = JSON.parse(localStorage.getItem('play'));
}
var currentPage = 'Main page';
function renderCards(list) {
  if (currentPage === 'Main page') {
    document.querySelector('.main-wrapper').innerHTML = _HomePageComponent__WEBPACK_IMPORTED_MODULE_1__["default"].render();
    (0,_theme__WEBPACK_IMPORTED_MODULE_4__.changeBgDependingOnMode)();
    openCatPage();
  } else if (currentPage === 'Statistic') {
    cardsFromStorage = JSON.parse(localStorage.getItem('play'));
    var heading = "\n    <div class =\"stat-wrapper\">\n      <div class=\"stat-btn-wrapper\">\n        <button class=\"stat-btn\" id=\"repeat\">Repeat Difficult Words</button>\n        <button class=\"stat-btn\" id=\"reset\">Reset</button>\n      </div>\n      <div class=\"table-heading\">\n        <div class=\"stat-word\">Word</div>\n        <div class=\"stat-translation\">Translation</div>\n        <div class=\"stat-asked\">Trained</div>\n        <div class=\"stat-correct\">Correct</div>\n        <div class=\"stat-wrong\">Wrong</div>\n        <div class=\"stat-errors\">% errors</div>\n      </div>\n      <div class=\"table\"></div>\n    </div>";
    document.querySelector('.main-wrapper').innerHTML = heading;
    document.querySelector('.table').innerHTML = _StatisticComponent__WEBPACK_IMPORTED_MODULE_2__["default"].render(cardsFromStorage);
    document.querySelector('#repeat').addEventListener('click', repeatWords);
    document.querySelector('#reset').addEventListener('click', _Statistic__WEBPACK_IMPORTED_MODULE_6__.resetWords);
  } else {
    if (currentPage === 'Difficult words') {
      document.querySelector('.main-wrapper').innerHTML = _CardsComponent__WEBPACK_IMPORTED_MODULE_3__["default"].render(list);
    } else {
      var categoryInCardsIndex = _cards__WEBPACK_IMPORTED_MODULE_0__["default"][0].indexOf(currentPage) + 1;
      var parametersToRender = _cards__WEBPACK_IMPORTED_MODULE_0__["default"][categoryInCardsIndex];
      document.querySelector('.main-wrapper').innerHTML = _CardsComponent__WEBPACK_IMPORTED_MODULE_3__["default"].render(parametersToRender);
      play.pageIndex = categoryInCardsIndex;
    }
    if (!_theme__WEBPACK_IMPORTED_MODULE_4__.switcher.checked) {
      play.changeCardsStyle();
    }
    document.querySelector('.cards-block').addEventListener('click', _rotateCard__WEBPACK_IMPORTED_MODULE_5__.rotateCard);
    document.querySelectorAll('.card').forEach(function (card) {
      card.addEventListener('mouseleave', _rotateCard__WEBPACK_IMPORTED_MODULE_5__.rotateCardBack);
      card.addEventListener('click', playSound);
    });
    document.querySelector('.btn').addEventListener('click', play.startGame);
  }
}
function openCatPage() {
  document.querySelector('.cards-block').addEventListener('click', function (e) {
    if (!e.target.closest('.main-card')) return;
    var targetCategory = e.target.closest('.main-card').innerText;
    if (!targetCategory) return;
    currentPage = targetCategory;
    renderCards();
    (0,_theme__WEBPACK_IMPORTED_MODULE_4__.addActiveLink)();
  });
}
function playSound(e) {
  var targetCard = e.target.closest('.card');
  if (!_theme__WEBPACK_IMPORTED_MODULE_4__.switcher.checked) return;
  if (targetCard.classList.contains('translate') || e.target.classList.contains('rotate')) {
    return;
  }
  var audio = document.querySelector('.audio');
  if (!audio) return;
  audio.src = "./assets/audio/".concat(targetCard.dataset.word, ".mp3");
  audio.play();
  addTrain(targetCard.dataset.word);
}
function addTrain(word) {
  var results = cardsFromStorage;
  if (!results || !results[play.pageIndex]) return; // add this check
  var targetCat = results[play.pageIndex];
  var currentWord = targetCat.find(function (i) {
    return i.word === word;
  });
  currentWord.asked += 1;
  results[play.pageIndex] = targetCat;
  localStorage.setItem('play', JSON.stringify(results));
}
function repeatWords() {
  var difficultWords = [];
  var categoryAmount = 8;
  for (var i = 0; i <= categoryAmount; i += 1) {
    for (var j = 0; j < categoryAmount; j += 1) {
      if (cardsFromStorage[i][j].errors > 0) {
        cardsFromStorage[i][j].image = "./assets/img/".concat(cardsFromStorage[i][j].word, ".jpg");
        difficultWords.push(cardsFromStorage[i][j]);
      }
    }
  }
  if (difficultWords.length === 0) {
    document.querySelector('.table').innerHTML = '<p>There are no difficult words</p>';
    return;
  }
  if (difficultWords.length > 8) {
    difficultWords.sort(function (a, b) {
      return a.errors > b.errors ? 1 : -1;
    });
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
  (0,_theme__WEBPACK_IMPORTED_MODULE_4__.addActiveLink)();
}
_theme__WEBPACK_IMPORTED_MODULE_4__.switcher.addEventListener('click', _theme__WEBPACK_IMPORTED_MODULE_4__.changeBgDependingOnMode);
menu.addEventListener('click', changePages);
document.addEventListener('click', function (e) {
  if (!document.querySelector('.modal').classList.contains('modal_closed')) {
    currentPage = 'Main page';
    renderCards();
    (0,_theme__WEBPACK_IMPORTED_MODULE_4__.addActiveLink)();
    document.querySelector('.modal-overlay').classList.add('modal_closed');
    document.querySelector('.modal').classList.add('modal_closed');
    return;
  }
  if (e.target.closest('.table-heading')) {
    var statHeading = document.querySelectorAll('.table-heading div');
    statHeading.forEach(function (elem) {
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
    (0,_Statistic__WEBPACK_IMPORTED_MODULE_6__.sortStat)(e.target);
  }
  if (!e.target.closest('#menu') && !e.target.closest('#menuToggle')) {
    navInput.checked = false;
  }
});
renderCards();
play.init();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCards);

/***/ }),

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var cards = [['Action (set A)', 'Action (set B)', 'Numbers', 'Colors', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'], [{
  word: 'cry',
  translation: 'плакать',
  image: './assets/img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: './assets/img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: './assets/img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: './assets/img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: './assets/img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: './assets/img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: './assets/img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: './assets/img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: './assets/img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: './assets/img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: './assets/img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: './assets/img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: './assets/img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: './assets/img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать',
  image: './assets/img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: './assets/img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'one',
  translation: 'один',
  image: './assets/img/one.jpg',
  audioSrc: 'audio/one.mp3'
}, {
  word: 'two',
  translation: 'два',
  image: './assets/img/two.jpg',
  audioSrc: 'audio/two.mp3'
}, {
  word: 'three',
  translation: 'три',
  image: './assets/img/three.jpg',
  audioSrc: 'audio/three.mp3'
}, {
  word: 'four',
  translation: 'четыре',
  image: './assets/img/four.jpg',
  audioSrc: 'audio/four.mp3'
}, {
  word: 'five',
  translation: 'пять',
  image: './assets/img/five.jpg',
  audioSrc: 'audio/five.mp3'
}, {
  word: 'six',
  translation: 'шесть',
  image: './assets/img/six.jpg',
  audioSrc: 'audio/six.mp3'
}, {
  word: 'seven',
  translation: 'семь',
  image: './assets/img/seven.jpg',
  audioSrc: 'audio/seven.mp3'
}, {
  word: 'eight',
  translation: 'восемь',
  image: './assets/img/eight.jpg',
  audioSrc: 'audio/eight.mp3'
}], [{
  word: 'blue',
  translation: 'синий',
  image: './assets/img/blue.jpg',
  audioSrc: 'audio/blue.mp3'
}, {
  word: 'red',
  translation: 'красный',
  image: './assets/img/red.jpg',
  audioSrc: 'audio/red.mp3'
}, {
  word: 'green',
  translation: 'зеленый',
  image: './assets/img/green.jpg',
  audioSrc: 'audio/green.mp3'
}, {
  word: 'yellow',
  translation: 'желтый',
  image: './assets/img/yellow.jpg',
  audioSrc: 'audio/yellow.mp3'
}, {
  word: 'pink',
  translation: 'розовый',
  image: './assets/img/pink.jpg',
  audioSrc: 'audio/pink.mp3'
}, {
  word: 'orange',
  translation: 'оранжевый',
  image: './assets/img/orange.jpg',
  audioSrc: 'audio/orange.mp3'
}, {
  word: 'purple',
  translation: 'фиолетовый',
  image: './assets/img/purple.jpg',
  audioSrc: 'audio/purple.mp3'
}, {
  word: 'black',
  translation: 'черный',
  image: './assets/img/black.jpg',
  audioSrc: 'audio/black.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: './assets/img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: './assets/img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: './assets/img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: './assets/img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: './assets/img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: './assets/img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: './assets/img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: './assets/img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: './assets/img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: './assets/img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: './assets/img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: './assets/img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: './assets/img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: './assets/img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: './assets/img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: './assets/img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: './assets/img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: './assets/img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: './assets/img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: './assets/img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: './assets/img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: './assets/img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: './assets/img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: './assets/img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: './assets/img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: './assets/img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: './assets/img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: './assets/img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: './assets/img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: './assets/img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: './assets/img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: './assets/img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./src/js/play.js":
/*!************************!*\
  !*** ./src/js/play.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Play)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Play = /*#__PURE__*/function () {
  function Play() {
    _classCallCheck(this, Play);
    this.mode = 'train';
    this.changeMode = this.changeMode.bind(this);
    this.startGame = this.startGame.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.gameLogic = this.gameLogic.bind(this);
    this.finishGame = this.finishGame.bind(this);
  }
  _createClass(Play, [{
    key: "init",
    value: function init() {
      this.addEvents();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.switcher = document.querySelector('#myonoffswitch');
      this.switcher.addEventListener('click', this.changeMode);
    }
  }, {
    key: "changeCardsStyle",
    value: function changeCardsStyle() {
      var cards = document.querySelectorAll('.card');
      var rotates = document.querySelectorAll('.rotate');
      var cardHeaders = document.querySelectorAll('.card-header');
      if (this.mode === 'play') {
        this.applyPlayModeStyles(cards, rotates, cardHeaders);
      } else {
        this.applyTrainModeStyles(cards, rotates, cardHeaders);
      }
    }
  }, {
    key: "applyPlayModeStyles",
    value: function applyPlayModeStyles(cards, rotates, cardHeaders) {
      cards.forEach(function (card) {
        card.classList.add('card-cover');
      });
      rotates.forEach(function (card) {
        card.classList.add('none');
      });
      cardHeaders.forEach(function (card) {
        card.classList.add('none');
      });
      var btn = document.querySelector('.btn');
      if (btn && btn.classList.contains('none')) {
        btn.classList.remove('none');
      }
    }
  }, {
    key: "applyTrainModeStyles",
    value: function applyTrainModeStyles(cards, rotates, cardHeaders) {
      cards.forEach(function (card) {
        card.classList.remove('card-cover');
      });
      rotates.forEach(function (card) {
        card.classList.remove('none');
      });
      cardHeaders.forEach(function (card) {
        card.classList.remove('none');
      });
      var btn = document.querySelector('.btn');
      if (btn && !btn.classList.contains('none')) {
        btn.classList.add('none');
      }
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.initializeGameVariables();
      this.prepareWordsOnPage();
      this.gameLogic();
    }
  }, {
    key: "initializeGameVariables",
    value: function initializeGameVariables() {
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
  }, {
    key: "prepareWordsOnPage",
    value: function prepareWordsOnPage() {
      var _this = this;
      this.wordsOnPage = [];
      this.wordsLeftToGuess = 8;
      document.querySelectorAll('.card').forEach(function (card) {
        _this.wordsOnPage.push(card.dataset.word);
      });
      this.wordsOnPage.sort(function () {
        return Math.random() - 0.5;
      });
    }
  }, {
    key: "gameLogic",
    value: function gameLogic() {
      var _this2 = this;
      this.playAudio();
      document.querySelector('.repeat').addEventListener('click', function () {
        _this2.audio.play();
      });
      document.querySelectorAll('.card').forEach(function (card) {
        card.addEventListener('click', _this2.checkWord);
      });
    }
  }, {
    key: "playAudio",
    value: function playAudio() {
      this.audio = document.querySelector('.audio');
      if (!this.audio) return;
      this.audio.src = "./assets/audio/".concat(this.wordsOnPage[this.wordsOnPage.length - 1], ".mp3");
      this.audio.play();
    }
  }, {
    key: "checkWord",
    value: function checkWord(e) {
      if (this.mode === 'train' || !this.wordsOnPage.length) return;
      this.audioStar = document.querySelector('.starSound');
      if (!this.audioStar) return;
      this.processClickedWord(e);
    }
  }, {
    key: "processClickedWord",
    value: function processClickedWord(e) {
      var clickedWord = e.target.closest('.card').dataset.word;
      var star = document.createElement('div');
      var checkWord = this.wordsOnPage[this.wordsOnPage.length - 1];
      var currentWord = this.targetCat.find(function (word) {
        return word.word === checkWord;
      });
      this.updateGameState(clickedWord, star, currentWord, e);
    }
  }, {
    key: "updateGameState",
    value: function updateGameState(clickedWord, star, currentWord, e) {
      if (clickedWord === this.wordsOnPage[this.wordsOnPage.length - 1]) {
        this.handleCorrectWord(star, currentWord, e);
      } else {
        this.handleIncorrectWord(star, currentWord, e);
      }
      currentWord.errors = Math.round(+currentWord.wrong + +currentWord.correct / +currentWord.wrong * 100);
      document.querySelector('.rating').append(star);
      this.audioStar.play();
    }
  }, {
    key: "handleCorrectWord",
    value: function handleCorrectWord(star, currentWord, e) {
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
  }, {
    key: "handleIncorrectWord",
    value: function handleIncorrectWord(star, currentWord, e) {
      star.classList.add('star-error');
      currentWord.wrong += 1;
      if (e.target.classList.contains('inactive')) return;
      this.audioStar.src = './assets/audio/error.mp3';
      this.mistakes += 1;
    }
  }, {
    key: "finishGame",
    value: function finishGame() {
      this.displayResults();
      this.audioStar.src = this.mistakes === 0 ? './assets/audio/success.mp3' : './assets/audio/failure.mp3';
      this.audioStar.play();
      this.addResultsToLocalStorage();
    }
  }, {
    key: "displayResults",
    value: function displayResults() {
      var mistakesMsg = this.mistakes === 0 ? 'WIN!' : "".concat(this.mistakes, " errors");
      var finishImg = document.querySelector('.modal img');
      finishImg.src = this.mistakes === 0 ? './assets/img/success.jpg' : './assets/img/failure.png';
      var finishText = document.querySelector('.modal p');
      finishText.innerHTML = mistakesMsg;
      document.querySelector('.modal-overlay').classList.remove('modal_closed');
      document.querySelector('.modal').classList.remove('modal_closed');
    }
  }, {
    key: "addResultsToLocalStorage",
    value: function addResultsToLocalStorage() {
      if (this.difficultWords) return;
      this.results[this.pageIndex] = this.targetCat;
      localStorage.setItem('play', JSON.stringify(this.results));
    }
  }, {
    key: "changeMode",
    value: function changeMode() {
      if (!this.switcher.checked) {
        this.mode = 'play';
        this.preparePlayMode();
      } else {
        this.mode = 'train';
        this.prepareTrainMode();
      }
      this.changeCardsStyle();
    }
  }, {
    key: "preparePlayMode",
    value: function preparePlayMode() {
      this.startBtn = document.querySelector('.btn');
      if (this.startBtn) {
        if (this.startBtn.classList.contains('repeat')) {
          this.startBtn.classList.remove('repeat');
        }
        this.startBtn.addEventListener('click', this.startGame);
      }
    }
  }, {
    key: "prepareTrainMode",
    value: function prepareTrainMode() {
      if (document.querySelector('.rating')) {
        document.querySelector('.rating').innerHTML = '';
      }
      document.querySelectorAll('.front').forEach(function (card) {
        if (card.classList.contains('inactive')) {
          card.classList.remove('inactive');
        }
      });
    }
  }]);
  return Play;
}();


/***/ }),

/***/ "./src/js/rotateCard.js":
/*!******************************!*\
  !*** ./src/js/rotateCard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rotateCard: () => (/* binding */ rotateCard),
/* harmony export */   rotateCardBack: () => (/* binding */ rotateCardBack)
/* harmony export */ });
function rotateCardBack(e) {
  if (e.target.classList.contains('translate')) {
    e.target.classList.remove('translate');
  }
}
function rotateCard(e) {
  if (e.target.classList.contains('rotate')) {
    var targetCard = e.target.closest('.card');
    targetCard.classList.add('translate');
  }
}

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addActiveLink: () => (/* binding */ addActiveLink),
/* harmony export */   changeBgDependingOnMode: () => (/* binding */ changeBgDependingOnMode),
/* harmony export */   switcher: () => (/* binding */ switcher)
/* harmony export */ });
var switcher = document.querySelector('#myonoffswitch');
var currentPage = 'Main page';
function changeBgDependingOnMode() {
  var mainCards = document.querySelectorAll('.main-card');
  var playModeClass = 'play-mode';
  if (!switcher.checked) {
    mainCards.forEach(function (item) {
      return item.classList.add(playModeClass);
    });
    menu.classList.add(playModeClass);
  } else {
    mainCards.forEach(function (item) {
      return item.classList.remove(playModeClass);
    });
    menu.classList.remove(playModeClass);
  }
}
function addActiveLink() {
  var menuLinks = document.querySelectorAll('#menu a');
  var activeClass = 'active';
  menuLinks.forEach(function (link) {
    var linkText = link.childNodes[0].innerHTML;
    if (currentPage === linkText) {
      link.classList.add(activeClass);
    } else {
      link.classList.remove(activeClass);
    }
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/rotate.png */ "./src/assets/img/rotate.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/star.svg */ "./src/assets/img/star.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/star-win.svg */ "./src/assets/img/star-win.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/repeat.svg */ "./src/assets/img/repeat.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/github-svgrepo.svg */ "./src/img/github-svgrepo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rss.svg */ "./src/img/rss.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: \"Roboto Mono\", monospace;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1280px;\n  padding: 0 40px;\n  margin: 0 auto;\n}\n\n#menuToggle {\n  display: block;\n  position: relative;\n  top: 32px;\n  left: 100px;\n  width: 25px;\n  z-index: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n#menuToggle a {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  color: #ffffff;\n  transition: color 0.3s ease;\n}\n#menuToggle a.active li {\n  color: #5a4079;\n}\n#menuToggle a:hover li {\n  color: #8b1848;\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  color: #ffffff;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #bbb9b9;\n  border-radius: 3px;\n  z-index: 1;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: #ffffff;\n}\n#menuToggle input:checked ~ span:nth-last-child(3) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n#menuToggle input:checked ~ span:nth-last-child(2) {\n  transform: rotate(-45deg) translate(0, -1px);\n}\n\n#menu {\n  position: absolute;\n  width: 400px;\n  min-height: calc(100vh + 40px);\n  margin: -100px 0 0 -100px;\n  padding-left: 100px;\n  padding-top: 125px;\n  background: linear-gradient(45deg, #c1d402, #d4d102, #b7ff00);\n  list-style-type: none;\n  transform-origin: 0% 0%;\n  transform: translate(-100%, 0);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n#menu.play-mode {\n  background: linear-gradient(45deg, #fd6600 0%, #ffac66 70%);\n}\n\n#menu li {\n  padding: 0.5rem 0;\n  font-size: 3.2rem;\n  line-height: 4.5rem;\n}\n\n#menuToggle input:checked ~ ul {\n  transform: none;\n}\n\n.active {\n  border-bottom: 1px solid #ffffff;\n}\n\n.onoffswitch {\n  position: relative;\n  width: 125px;\n  left: calc(100% - 235px);\n}\n\n.onoffswitch-checkbox {\n  display: none;\n}\n\n.onoffswitch-label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid #bbb9b9;\n  border-radius: 20px;\n}\n\n.onoffswitch-inner {\n  display: block;\n  width: 200%;\n  margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n}\n\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n  display: block;\n  float: left;\n  width: 50%;\n  height: 30px;\n  line-height: 30px;\n  font-size: 1.8rem;\n  font-weight: bold;\n  box-sizing: border-box;\n  color: #ffffff;\n}\n\n.onoffswitch-inner:before {\n  content: \"TRAIN\";\n  padding-left: 10px;\n  background-image: linear-gradient(45deg, #c1d402, #d4d102, #b7ff00);\n  color: #ffffff;\n}\n\n.onoffswitch-inner:after {\n  content: \"PLAY\";\n  padding-right: 20px;\n  background-image: linear-gradient(45deg, #fd6600 0%, #ffac66 70%);\n  color: #ffffff;\n  text-align: right;\n}\n\n.onoffswitch-switch {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 46px;\n  margin: 2px;\n  right: 75px;\n  border-radius: 20px;\n  transition: all 0.3s ease-in 0s;\n  background: #ffffff;\n}\n\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n  margin-left: 0;\n}\n\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n  right: 0px;\n}\n\n.cards-block {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 20px;\n  padding: 0px 15px;\n}\n\n.main-card {\n  width: 300px;\n  height: 280px;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  color: #212529;\n  display: flex;\n  flex-direction: column;\n  font-size: 2.4rem;\n  line-height: 3.6rem;\n  font-weight: 400;\n  text-align: center;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  background: linear-gradient(#c1d402 0%, #d4d102 40%);\n  margin: 20px 25px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.main-card.play-mode {\n  background: linear-gradient(#fd6600 0%, #ffac66 40%);\n}\n\n.main-card:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);\n}\n\n.main-card img {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  border: 10px solid #ffffff;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 30px auto;\n}\n\n.card-container {\n  perspective: 500px;\n}\n\n.card {\n  width: 300px;\n  height: 250px;\n  border-radius: 5px;\n  border: 1px solid #bbb9b9;\n  margin: 20px 25px;\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  transform-style: preserve-3d;\n  box-shadow: 0 1px 3px 0 #bbb9b9;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);\n  transition: box-shadow 0.25s linear;\n  transition: box-shadow 0.25s linear, transform 0.7s;\n}\n.card:hover {\n  box-shadow: -1px 5px 15px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.page {\n  margin-top: 10px;\n}\n\n.back,\n.front {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  background-size: contain;\n  background-repeat: no-repeat;\n  transition: 0.3s;\n}\n\n.card-header {\n  width: 100%;\n  margin-top: 200px;\n  padding: 0 15px;\n  font-size: 2.4rem;\n  line-height: 45px;\n  text-align: center;\n  pointer-events: none;\n  background: #ffffff;\n  color: #212529;\n}\n\n.back,\n.front,\n.rotate {\n  backface-visibility: hidden;\n}\n\n.back {\n  transform: rotateY(180deg);\n}\n\n.translate {\n  transform: rotateY(180deg);\n}\n\n.rotate {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 3.2rem;\n  background-repeat: no-repeat;\n  background-position: center 1.6rem;\n  bottom: 5px;\n  right: 5px;\n  transition: 0.3s;\n  filter: grayscale(1);\n}\n.rotate:hover {\n  filter: none;\n}\n\n.card-cover .back,\n.card-cover .front {\n  background-size: cover;\n  background-position: 50%;\n}\n\n.rating {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  max-width: 1350px;\n  margin: 0 auto;\n  height: 40px;\n  overflow-x: hidden;\n  line-height: 3.6rem;\n  font-size: 3.6rem;\n  color: linear-gradient(45deg, #fd6600 0%, #ffac66 70%);\n}\n\n.star-error,\n.star-win {\n  flex-shrink: 0;\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  background-size: 40px 40px;\n}\n\n.star-error {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.star-win {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.inactive {\n  opacity: 0.5;\n}\n\n.btn-wrapper {\n  width: 100%;\n  text-align: center;\n}\n\n.btn {\n  outline: 0 !important;\n}\n\n.btn {\n  width: 100%;\n  font-size: 2.4rem;\n  padding: 20px 25px;\n  margin: 20px auto;\n  max-width: 650px;\n  height: 65px;\n  background: linear-gradient(45deg, #fd6600 0%, #ffac66 70%);\n  color: #ffffff;\n  border-radius: 10px;\n  border-width: 1px;\n  transition: 0.3s;\n}\n\n.none {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  font-size: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.repeat {\n  width: 65px;\n  font-size: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "), linear-gradient(45deg, #fd6600 0%, #ffac66 70%);\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-size: 32px 32px, cover;\n  background-position: 50%;\n}\n\n.stat-btn-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  width: 800px;\n  margin: 0 auto;\n  margin-top: 2rem;\n}\n\n.stat-btn {\n  background-color: #5a4079;\n  color: #ffffff;\n  outline: none;\n  border: none;\n  border-radius: 0.5rem;\n  padding: 0.5rem 1rem;\n  font-size: 2rem;\n}\n.stat-btn:active {\n  background-color: #f3627b;\n}\n\n#repeat {\n  margin-right: 2rem;\n}\n\ndiv.modal_closed {\n  display: none;\n}\n\n.modal-overlay {\n  z-index: 50;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.modal {\n  z-index: 100;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  min-width: 320px;\n  max-height: 100%;\n  border-radius: 10px;\n  transform: translate(-50%, -50%);\n  background: white;\n  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);\n  text-align: center;\n}\n.modal p {\n  font-size: 3.6rem;\n}\n\ntable,\n.table-heading {\n  width: 800px;\n  margin: 0 auto;\n}\n\ntd {\n  padding: 0.5rem;\n  padding-right: 1rem;\n  min-width: 10.1rem;\n}\ntd:nth-child(3), td:nth-child(4), td:nth-child(5), td:nth-child(6) {\n  text-align: center;\n}\n\ntr:hover {\n  background: linear-gradient(45deg, #c1d402, #d4d102, #b7ff00);\n}\n\n.table-heading {\n  margin-top: 3rem;\n  background-color: #5a4079;\n  color: #ffffff;\n  font-size: 2.4rem;\n  display: flex;\n  justify-content: space-around;\n}\n.table-heading:hover {\n  cursor: pointer;\n}\n.table-heading div {\n  padding: 0.5rem 0;\n}\n.table-heading div::after {\n  content: \"↓\";\n  transform: rotate(90deg);\n  font-size: 1.6rem;\n  padding-left: 2px;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.stat-translation {\n  flex-basis: 20%;\n}\n\n.cat-heading {\n  text-align: center;\n  background-color: #bbb9b9;\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n.active-td::after {\n  color: #ffff00;\n}\n\n.reverse::after {\n  content: \"↑\" !important;\n}\n\n.table p {\n  text-align: center;\n  font-size: 36px;\n  margin-top: 30px;\n  height: 60vh;\n}\n\nfooter {\n  font-size: 1.7rem;\n  background-color: #758833;\n  padding: 20px;\n}\nfooter .footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  color: #ffffff;\n}\nfooter .github {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  width: 160px;\n  height: 45px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nfooter .github.img {\n  width: 50px;\n  height: 50px;\n}\nfooter .github a {\n  color: #ffffff;\n}\nfooter .rss {\n  width: 121px;\n  height: 45px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n@media (max-width: 760px){\n  #menuToggle {\n    left: 50px;\n  }\n  #menu {\n    width: 320px;\n  }\n  #menu li {\n    font-size: 2rem;\n    padding: 0;\n  }\n  .cards-block {\n    margin-left: 0;\n    padding: 20px 0;\n  }\n  .card {\n    width: 270px;\n    height: 225px;\n  }\n  .card-header {\n    margin-top: 180px;\n  }\n  .rotate {\n    background-position: center 2rem;\n  }\n  .stat-btn-wrapper {\n    width: 500px;\n  }\n  table,\n  .table-heading {\n    width: 500px;\n  }\n  .stat-wrapper {\n    width: 500px;\n    margin: 0 auto;\n    overflow-x: scroll;\n  }\n  td {\n    padding: 0;\n    min-width: 6rem;\n  }\n  .table-heading div {\n    padding: 0;\n  }\n  .table-heading {\n    font-size: 1.6rem;\n  }\n  footer {\n    font-size: 1rem;\n  }\n  footer .github {\n    width: 135px;\n  }\n  footer .github.img {\n    width: 20px;\n    height: 20px;\n  }\n  footer .rig {\n    display: none;\n  }\n}\n@media (max-width: 900px){\n  .stat-btn-wrapper {\n    width: 700px;\n  }\n  table,\n  .table-heading {\n    width: 700px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/style/_style.scss","webpack://./src/style/_navigation.scss","webpack://./src/style/_var.scss","webpack://./src/style/_switch.scss","webpack://./src/style/_main-page-cards.scss","webpack://./src/style/_cards.scss","webpack://./src/style/_button.scss","webpack://./src/style/_modal.scss","webpack://./src/style/_table.scss","webpack://./src/style/footer.scss","webpack://./<no source>"],"names":[],"mappings":"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","sourcesContent":["@import '~normalize.css';\n@import 'style/var';\n@import 'style/mixins';\n@import 'style/style';\n\n@import 'style/navigation';\n@import 'style/switch';\n@import 'style/main-page-cards';\n@import 'style/cards';\n@import 'style/button';\n@import 'style/modal';\n@import 'style/table';\n@import 'style/footer';\n","html {\n  font-size: 10px;\n}\nbody {\n  font-family: 'Roboto Mono', monospace;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1280px;\n  padding: 0 40px;\n  margin: 0 auto;\n}\n","#menuToggle {\n  display: block;\n  position: relative;\n  top: 32px;\n  left: 100px;\n  width: 25px;\n  z-index: 1;\n  user-select: none;\n\n  & a {\n    text-decoration: none;\n    color: $color-light;\n    transition: color 0.3s ease;\n\n    &.active li {\n      color: $color-nav-active;\n    }\n\n    &:hover li {\n      color: $color-nav-hover;\n    }\n  }\n\n  @include media-mobile {\n    left: 50px;\n  }\n}\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: absolute;\n  color: $color-light;\n  top: -7px;\n  left: -5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2;\n}\n\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: $light-gray-color;\n  border-radius: 3px;\n  z-index: 1;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n\n  &:first-child {\n    transform-origin: 0% 0%;\n  }\n\n  &:nth-last-child(2) {\n    transform-origin: 0% 100%;\n  }\n}\n\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(-2px, -1px);\n  background: $color-light;\n\n  &:nth-last-child(3) {\n    opacity: 0;\n    transform: rotate(0deg) scale(0.2, 0.2);\n  }\n\n  &:nth-last-child(2) {\n    transform: rotate(-45deg) translate(0, -1px);\n  }\n}\n\n#menu {\n  position: absolute;\n  width: 400px;\n  min-height: calc(100vh + 40px);\n  margin: -100px 0 0 -100px;\n  padding-left: 100px;\n  padding-top: 125px;\n  background: $color-train;\n  list-style-type: none;\n  transform-origin: 0% 0%;\n  transform: translate(-100%, 0);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n\n  &.play-mode {\n    background: $color-play;\n  }\n\n  @include media-mobile {\n    width: 320px;\n  }\n}\n\n#menu li {\n  padding: 0.5rem 0;\n  font-size: 3.2rem;\n  line-height: 4.5rem;\n\n  @include media-mobile {\n    font-size: 2rem;\n    padding: 0;\n  }\n}\n\n#menuToggle input:checked ~ ul {\n  transform: none;\n}\n\n.active {\n  border-bottom: 1px solid $color-light;\n}\n","$color-train: linear-gradient(45deg, #c1d402, #d4d102, #b7ff00);\n$color-train-cards: linear-gradient(#c1d402 0%, #d4d102 40%);\n\n$color-play: linear-gradient(45deg, #fd6600 0%, #ffac66 70%);\n$color-play-cards: linear-gradient(#fd6600 0%, #ffac66 40%);\n\n$color-light: #ffffff;\n$black-color: #212529;\n$light-gray-color: #bbb9b9;\n$yellow-color: #ffff00;\n$color-nav-hover: #8b1848;\n$color-nav-active: #5a4079;\n$color-stat: #5a4079;\n$color-stat-active: #f3627b;\n\n$tablet-width: 900px;\n$mobile-width: 760px;\n",".onoffswitch {\n  position: relative;\n  width: 125px;\n  left: calc(100% - 235px);\n}\n.onoffswitch-checkbox {\n  display: none;\n}\n.onoffswitch-label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid $light-gray-color;\n  border-radius: 20px;\n}\n.onoffswitch-inner {\n  display: block;\n  width: 200%;\n  margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before,\n.onoffswitch-inner:after {\n  display: block;\n  float: left;\n  width: 50%;\n  height: 30px;\n  line-height: 30px;\n  font-size: 1.8rem;\n  font-weight: bold;\n  box-sizing: border-box;\n  color: $color-light;\n}\n.onoffswitch-inner:before {\n  content: 'TRAIN';\n  padding-left: 10px;\n  background-image: $color-train;\n  color: $color-light;\n}\n.onoffswitch-inner:after {\n  content: 'PLAY';\n  padding-right: 20px;\n  background-image: $color-play;\n  color: $color-light;\n  text-align: right;\n}\n.onoffswitch-switch {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 46px;\n  margin: 2px;\n  right: 75px;\n  border-radius: 20px;\n  transition: all 0.3s ease-in 0s;\n  background: $color-light;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n  margin-left: 0;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n  right: 0px;\n}\n",".cards-block {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  margin-top: 20px;\n  padding: 0px 15px;\n\n  @include media-mobile {\n    margin-left: 0;\n    padding: 20px 0;\n  }\n}\n\n.main-card {\n  width: 300px;\n  height: 280px;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  color: $black-color;\n  display: flex;\n  flex-direction: column;\n  font-size: 2.4rem;\n  line-height: 3.6rem;\n  font-weight: 400;\n  text-align: center;\n  text-decoration: none;\n  background: $color-train-cards;\n  margin: 20px 25px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &.play-mode {\n    background: $color-play-cards;\n  }\n}\n\n.main-card:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);\n}\n\n.main-card img {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  border: 10px solid $color-light;\n  object-fit: cover;\n  margin: 30px auto;\n}\n",".card-container {\n  perspective: 500px;\n}\n\n.card {\n  width: 300px;\n  height: 250px;\n  border-radius: 5px;\n  border: 1px solid $light-gray-color;\n  margin: 20px 25px;\n\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n\n  transform-style: preserve-3d;\n  box-shadow: 0 1px 3px 0 $light-gray-color;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);\n\n  transition: box-shadow 0.25s linear;\n  transition: box-shadow 0.25s linear, transform 0.7s;\n  transition: box-shadow 0.25s linear, transform 0.7s, -webkit-transform 0.7s;\n\n  &:hover {\n    box-shadow: -1px 5px 15px 0 rgba(0, 0, 0, 0.5);\n  }\n\n  @include media-mobile {\n    width: 270px;\n    height: 225px;\n  }\n}\n\ndiv.page {\n  margin-top: 10px;\n}\n\n.back,\n.front {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  background-size: contain;\n  background-repeat: no-repeat;\n  transition: 0.3s;\n}\n\n.card-header {\n  width: 100%;\n  margin-top: 200px;\n  padding: 0 15px;\n  font-size: 2.4rem;\n  line-height: 45px;\n  text-align: center;\n  pointer-events: none;\n  background: $color-light;\n  color: $black-color;\n\n  @include media-mobile {\n    margin-top: 180px;\n  }\n}\n\n.back,\n.front,\n.rotate {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.back {\n  -webkit-transform: rotateY(180deg);\n  transform: rotateY(180deg);\n}\n\n.translate {\n  -webkit-transform: rotateY(180deg);\n  transform: rotateY(180deg);\n}\n\n.rotate {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background-image: url(../assets/img/rotate.png);\n  background-size: 3.2rem;\n  background-repeat: no-repeat;\n  background-position: center 1.6rem;\n  bottom: 5px;\n  right: 5px;\n  transition: 0.3s;\n  filter: grayscale(1);\n\n  &:hover {\n    filter: none;\n  }\n\n  @include media-mobile {\n    background-position: center 2rem;\n  }\n}\n\n.card-cover .back,\n.card-cover .front {\n  background-size: cover;\n  background-position: 50%;\n}\n\n.rating {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  max-width: 1350px;\n  margin: 0 auto;\n  height: 40px;\n  overflow-x: hidden;\n  line-height: 3.6rem;\n  font-size: 3.6rem;\n  color: $color-play;\n}\n\n.star-error,\n.star-win {\n  flex-shrink: 0;\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  background-size: 40px 40px;\n}\n\n.star-error {\n  background-image: url(../assets/img/star.svg);\n}\n\n.star-win {\n  background-image: url(../assets/img/star-win.svg);\n}\n\n.inactive {\n  opacity: 0.5;\n}\n",".btn-wrapper {\n  width: 100%;\n  text-align: center;\n}\n\n.btn {\n  width: 100%;\n  font-size: 2.4rem;\n  padding: 20px 25px;\n  margin: 20px auto;\n  max-width: 650px;\n  height: 65px;\n  background: $color-play;\n  color: $color-light;\n  border-radius: 10px;\n  outline: 0 !important;\n  border-width: 1px;\n  transition: 0.3s;\n}\n\n.none {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  font-size: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.repeat {\n  width: 65px;\n  font-size: 0;\n  background-image: url(../assets/img/repeat.svg), $color-play;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-size: 32px 32px, cover;\n  background-position: 50%;\n}\n\n.stat-btn-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  width: 800px;\n  margin: 0 auto;\n  margin-top: 2rem;\n  @include media-tablet {\n    width: 700px;\n  }\n\n  @include media-mobile {\n    width: 500px;\n  }\n}\n\n.stat-btn {\n  background-color: $color-stat;\n  color: $color-light;\n  outline: none;\n  border: none;\n  border-radius: 0.5rem;\n  padding: 0.5rem 1rem;\n  font-size: 2rem;\n\n  &:active {\n    background-color: $color-stat-active;\n  }\n}\n\n#repeat {\n  margin-right: 2rem;\n}\n","div.modal_closed {\n  display: none;\n}\n\n.modal-overlay {\n  z-index: 50;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.modal {\n  z-index: 100;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  min-width: 320px;\n  max-height: 100%;\n  border-radius: 10px;\n  transform: translate(-50%, -50%);\n  background: white;\n  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);\n  text-align: center;\n\n  & p {\n    font-size: 3.6rem;\n  }\n}\n","table,\n.table-heading {\n  width: 800px;\n  margin: 0 auto;\n\n  @include media-tablet {\n    width: 700px;\n  }\n\n  @include media-mobile {\n    width: 500px;\n  }\n}\n\n.stat-wrapper {\n  @include media-mobile {\n    width: 500px;\n    margin: 0 auto;\n    overflow-x: scroll;\n  }\n}\n\ntd {\n  padding: 0.5rem;\n  padding-right: 1rem;\n  min-width: 10.1rem;\n  &:nth-child(3),\n  &:nth-child(4),\n  &:nth-child(5),\n  &:nth-child(6) {\n    text-align: center;\n  }\n\n  @include media-mobile {\n    padding: 0;\n    min-width: 6rem;\n  }\n}\n\ntr:hover {\n  background: $color-train;\n}\n\n.table-heading {\n  margin-top: 3rem;\n  background-color: $color-stat;\n  color: $color-light;\n  font-size: 2.4rem;\n  display: flex;\n  justify-content: space-around;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  & div {\n    padding: 0.5rem 0;\n    @include media-mobile {\n      padding: 0;\n    }\n  }\n\n  & div::after {\n    content: '\\2193\t';\n    transform: rotate(90deg);\n    font-size: 1.6rem;\n    padding-left: 2px;\n    text-decoration: none;\n  }\n\n  @include media-mobile {\n    font-size: 1.6rem;\n  }\n}\n\n.stat-translation {\n  flex-basis: 20%;\n}\n\n.cat-heading {\n  text-align: center;\n  background-color: $light-gray-color;\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n.active-td {\n  &::after {\n    color: $yellow-color;\n  }\n}\n\n.reverse {\n  &::after {\n    content: '\\2191\t' !important;\n  }\n}\n\n.table p {\n  text-align: center;\n  font-size: 36px;\n  margin-top: 30px;\n  height: 60vh;\n}\n","footer {\n  font-size: 1.7rem;\n  background-color: #758833;\n  padding: 20px;\n  .footer-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 auto;\n    color: $color-light;\n  }\n\n  .github {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    background-image: url('../img/github-svgrepo.svg');\n    width: 160px;\n    height: 45px;\n    background-size: contain;\n    background-repeat: no-repeat;\n\n    &.img {\n      width: 50px;\n      height: 50px;\n    }\n    a {\n      color: $color-light;\n    }\n  }\n\n  .rss {\n    width: 121px;\n    height: 45px;\n    background-image: url('../img/rss.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n\n  @include media-mobile {\n    font-size: 1rem;\n\n    .github {\n      width: 135px;\n\n      &.img {\n        width: 20px;\n        height: 20px;\n      }\n    }\n\n    .rig {\n      display: none;\n    }\n  }\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap\"\n      rel=\"stylesheet\" />\n    <title>English for Kids</title>\n  </head>\n  <body>\n    <header class=\"header\">\n      <div class=\"modal-overlay modal_closed\"></div>\n      <div class=\"modal modal_closed\" id=\"modal\">\n        <p></p>\n        <img />\n      </div>\n      <div class=\"header-wrapper\">\n        <nav class=\"header-navigation\" role=\"navigation\">\n          <div id=\"menuToggle\">\n            <input type=\"checkbox\" />\n            <span></span>\n            <span></span>\n            <span></span>\n            <ul id=\"menu\">\n              <a href=\"#\" class=\"active\"><li>Main page</li></a>\n              <a href=\"#\"><li>Action (set A)</li></a>\n              <a href=\"#\"><li>Action (set B)</li></a>\n              <a href=\"#\"><li>Numbers</li></a>\n              <a href=\"#\"><li>Colors</li></a>\n              <a href=\"#\"><li>Animal (set A)</li></a>\n              <a href=\"#\"><li>Animal (set B)</li></a>\n              <a href=\"#\"><li>Clothes</li></a>\n              <a href=\"#\"><li>Emotions</li></a>\n              <a href=\"#\"><li>Statistic</li></a>\n            </ul>\n          </div>\n        </nav>\n        <div class=\"switch-wrapper\">\n          <div class=\"onoffswitch\">\n            <input\n              type=\"checkbox\"\n              name=\"onoffswitch\"\n              class=\"onoffswitch-checkbox\"\n              id=\"myonoffswitch\"\n              checked />\n            <label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n              <span class=\"onoffswitch-inner\"></span>\n              <span class=\"onoffswitch-switch\"></span>\n            </label>\n          </div>\n        </div>\n      </div>\n    </header>\n    <main>\n      <section class=\"section\">\n        <div class=\"container\">\n          <div class=\"main-wrapper\"></div>\n        </div>\n      </section>\n      <footer class=\"foo ter\">\n        <div class=\"footer-container\">\n          <div class=\"github\">\n            <a\n              href=\"https://github.com/Alex-prokop\"\n              class=\"github\"\n              target=\"_blank\"\n              >Alex-prokop</a\n            >\n          </div>\n          <div class=\"rig\">© 2023</div>\n          <a href=\"https://rs.school/js/\" class=\"rss\" target=\"_blank\"></a>\n        </div>\n      </footer>\n    </main>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/repeat.svg":
/*!***********************************!*\
  !*** ./src/assets/img/repeat.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/repeat.svg";

/***/ }),

/***/ "./src/assets/img/rotate.png":
/*!***********************************!*\
  !*** ./src/assets/img/rotate.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/rotate.png";

/***/ }),

/***/ "./src/assets/img/star-win.svg":
/*!*************************************!*\
  !*** ./src/assets/img/star-win.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/star-win.svg";

/***/ }),

/***/ "./src/assets/img/star.svg":
/*!*********************************!*\
  !*** ./src/assets/img/star.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/star.svg";

/***/ }),

/***/ "./src/img/github-svgrepo.svg":
/*!************************************!*\
  !*** ./src/img/github-svgrepo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/github-svgrepo.svg";

/***/ }),

/***/ "./src/img/rss.svg":
/*!*************************!*\
  !*** ./src/img/rss.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/rss.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _js_Statistic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Statistic */ "./src/js/Statistic.js");




})();

/******/ })()
;
//# sourceMappingURL=main.b82ef70a482baed084f3.js.map