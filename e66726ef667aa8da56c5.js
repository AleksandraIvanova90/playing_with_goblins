import AutoHole from '../components/autohole/autohole.js';
import HoleGame from '../components/hole-game/hole-game.js';
const autoHole = new AutoHole('.hole-game');
autoHole.fistHole();
autoHole.nextHoles();

/* eslint-disable-next-line */
const holeGame = new HoleGame('.hole-game');