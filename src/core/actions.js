import { rndBetween } from "@laufire/utils/random";

const increaseScore = ({ config, state }) => ({
    score: state.score + config.score,
});

const moveTargets = ({ config, state }) => ({ 
    targets: state.targets.map(()=> ({
        x: rndBetween(0, 100 - config.width),
        y: rndBetween(0, 100 - config.height), 
    }))
});

const addTarget = ({ config, state }) => ({ 
    targets: [
        ...state.targets,
        {
            x: rndBetween(0, 100 - config.width),
            y: rndBetween(0, 100 - config.height), 
        },
    ]
});

const decreaseLives = ({ state }) => ({
    lives: state.lives - 1,
});

const restart = ({ seed }) => seed;

const actions = {
    increaseScore,
    moveTargets,
    addTarget,
    decreaseLives,
    restart,
};

export default actions;
