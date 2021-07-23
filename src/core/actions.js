import PowerManager from "../services/powerManager";
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

const removeTarget = (context, target) => ({
    targets: TargetManager.removeTarget(context.state.targets, target),
});

const removeRandomTargets = ({ state }) => {
    const targetsToRemove = TargetManager.getRandomTargets(state.targets);

   return {
        targets: TargetManager.removeTargets(state.targets, targetsToRemove),
        score: state.score + TargetManager.getTargetsScore(targetsToRemove),
    }
};

const restart = ({ seed }) => seed;

const addPower = ({ state }) => ({
    powers: PowerManager.addPower(state.powers),
});

const removePower = ({ state }) => ({
    powers: PowerManager.removePower(state.powers),
});

const removeClickedPower = (context, power) => ({
    powers: PowerManager.removeClickedPower(context.state.powers, power),
});

const decreaseTargetLives = ({ state }, target) => ({
    targets: TargetManager.decreaseTargetLives(state.targets, target),
});

const removeDeadTargets = ({ state }) => {
    const targetsToRemove = TargetManager.getDeadTargets(state.targets);

    return ({
        targets: TargetManager.removeTargets(state.targets, targetsToRemove),
        score: state.score + TargetManager.getTargetsScore(targetsToRemove),
    });
}

const actions = {
    increaseScore,
    moveTargets,
    addTarget,
    decreaseLives,
    restart,
    removeTarget,
    removeRandomTargets,
    addPower,
    removePower,
    removeClickedPower,
    decreaseTargetLives,
    removeDeadTargets,
};

export default actions;
