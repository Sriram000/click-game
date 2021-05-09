import config from "./config";

const InitialState = { 
  targetX: 50 - config.width / 2,
  targetY: 50 - config.height / 2,
  score: 0,
  lives: config.lives,
}

export default InitialState;
