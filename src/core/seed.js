import config from "./config";
import TargetManager from '../services/targetManager';

const { getTarget } = TargetManager;

const seed = { 
  targets: [
    getTarget({
      x: 50 - config.width / 2,
      y: 50 - config.height / 2,
    }),
  ],
  score: 0,
  lives: config.lives,
}

export default seed;
