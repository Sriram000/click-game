import TargetManager from "../services/targetManager";

const increaseScore = ({ state }, target) => ({
    score: state.score + target.score,
});

const moveTargets = ({ state }) => ({
    targets: TargetManager.moveTargets(state.targets),
});
   
const addTarget = ({ state }) => ({
    targets: TargetManager.addTarget(state.targets),
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
