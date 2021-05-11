import config from '../core/config';
import { rndBetween, rndString } from "@laufire/utils/random";

const getRandomX = () => rndBetween(0, 100 - config.width);

const getRandomY = () => rndBetween(0, 100 - config.height);

const getTarget = ({ x, y } = {}) => ({
    id: rndString(8), 
    x: x !== undefined ? x : getRandomX(),
    y: y !== undefined ? y : getRandomY(),
});

const moveTargets = (targets) => targets.map(() => ({
    x: getRandomX(),
    y: getRandomY(),
}));

const addTarget = (targets) => targets.length < config.maxTargets
    ? targets.concat(getTarget())
    : targets;

const TargetManager = {
    moveTargets,
    addTarget,   
    getTarget,
}

export default TargetManager;

