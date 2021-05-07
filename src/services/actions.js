import randomBetween from './lib.js';

const increaseScore = ({ config, state, setState }) => setState({
    ...state,
    score: state.score + config.score,
});

const decreaseScore = ({ config, state, setState }) => setState({
    ...state,
    score: state.score - config.score,
});

const moveTarget = (context) => {
    const { config, state, setState } = context;

    setState({ 
        ...state,
        targetX: randomBetween(0, 100 - config.width),
        targetY: randomBetween(0, 100 - config.height), 
    });     
}

const actions = {
    increaseScore,
    decreaseScore,
    moveTarget,
};

export default actions;
