import config from "./config";
import TargetManager from '../services/targetManager';

const { getTarget } = TargetManager;

const seed = { 
  targets: [
    getTarget(),
  ],
  score: 0,
  lives: config.lives,
}

export default seed;
