import { rndBetween } from "@laufire/utils/random";

const increaseScore = ({ config, state }) => ({
    score: state.score + config.score,
});

const moveTarget = ({ config }) => ({ 
    targetX: rndBetween(0, 100 - config.width),
    targetY: rndBetween(0, 100 - config.height), 
});

const decreaseLives = ({ state }) => ({
    lives: state.lives - 1,
});

const restart = ({ seed }) => seed;

const actions = {
    increaseScore,
    moveTarget,
    decreaseLives,
    restart,
};

export default actions;
