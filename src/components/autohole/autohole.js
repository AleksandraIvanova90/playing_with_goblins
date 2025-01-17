/* eslint-disable no-param-reassign */
import getRandomInt from '../../js/functions.js';

export default class AutoHole {
  constructor(element) {
    element = document.querySelector(element);
    this.element = element;
  }

  fistHole() {
    const index = getRandomInt(0, 15);
    this.element.children[index].classList.add('hole_has-mole');
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
      hole.classList.remove('hole_has-mole');
      hole.classList.remove('occupied');
      this.element.children[randomHole].classList.add('hole_has-mole');
      this.element.children[randomHole].classList.add('occupied');
    }, 1200);
  }
}
