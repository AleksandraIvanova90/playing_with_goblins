/* eslint-disable no-param-reassign */
export default class HoleGame {
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
