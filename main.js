/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/functions.js
/* eslint-disable no-param-reassign */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
;// CONCATENATED MODULE: ./src/components/autohole/autohole.js
/* eslint-disable no-param-reassign */

class AutoHole {
  constructor(element) {
    element = document.querySelector(element);
    this.element = element;
  }
  fistHole() {
    const index = getRandomInt(0, 15);
    this.element.children[index].classList.add('hole_has-goblin');
    this.element.children[index].classList.add('occupied');
  }
  nextHoles() {
    setInterval(() => {
      const hole = this.element.querySelector('.occupied');
      const holeIndex = Array.prototype.indexOf.call(hole.parentElement.children, hole);
      let randomHole = getRandomInt(0, 15);
      while (randomHole === holeIndex) {
        randomHole = getRandomInt(0, 15);
      }
      hole.classList.remove('hole_has-goblin');
      hole.classList.remove('occupied');
      this.element.children[randomHole].classList.add('hole_has-goblin');
      this.element.children[randomHole].classList.add('occupied');
    }, 1200);
  }
}
;// CONCATENATED MODULE: ./src/components/hole-game/hole-game.js
/* eslint-disable no-param-reassign */
class HoleGame {
  constructor(element) {
    element = document.querySelector(element);
    this.element = element;
    this.onHoleClick = this.onHoleClick.bind(this);
    this.element.addEventListener('click', this.onHoleClick);
  }
  onHoleClick(e) {
    const hole = e.target;
    const moles = this.element.previousElementSibling.querySelector('.status-goblins');
    const misses = this.element.previousElementSibling.querySelector('.status-misses');
    if (hole.className.includes('occupied') === true) {
      moles.textContent = +moles.textContent + 1;
      hole.classList.remove('hole_has-goblin');
    } else {
      misses.textContent = +misses.textContent + 1;
      if (misses.textContent === '5') {
        moles.textContent = 0;
        misses.textContent = 0;
        alert('Вы проиграли!');
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const autoHole = new AutoHole('.hole-game');
autoHole.fistHole();
autoHole.nextHoles();

/* eslint-disable-next-line */
const holeGame = new HoleGame('.hole-game');
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;