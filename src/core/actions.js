import { rndBetween } from "@laufire/utils/random";

const increaseScore = ({ config, state }) => ({
    score: state.score + config.score,
});

const moveTarget = ({ config }) => ({ 
   targets: [
        {
            x: rndBetween(0, 100 - config.width),
            y: rndBetween(0, 100 - config.height), 
        },
        {
            x: rndBetween(0, 100 - config.width),
            y: rndBetween(0, 100 - config.height), 
        },

    ],
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
