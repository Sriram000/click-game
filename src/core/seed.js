import config from "./config";
import TargetManager from '../services/targetManager';

const { getTarget } = TargetManager;

const seed = { 
  targets: [
    getTarget({
      x: 50,
      y: 50,
      type: "super",
    }),
  ],
  score: 0,
  lives: config.lives,
}

export default seed;
