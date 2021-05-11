import config from '../core/config';
import { rndBetween, rndString } from "@laufire/utils/random";

const { width, height, maxTargets, targetTypes } = config;

const getRandomX = () => rndBetween(0, 100 - width);

const getRandomY = () => rndBetween(0, 100 - height);

const getTarget = ({ x, y, type = "normal" } = {}) => ({
    id: rndString(8), 
    x: x !== undefined ? x : getRandomX(),
    y: y !== undefined ? y : getRandomY(),
    ...targetTypes[type],
});

const moveTargets = (targets) => targets.map(() => ({
    x: getRandomX(),
    y: getRandomY(),
}));

const addTarget = (targets) => targets.length < maxTargets
    ? targets.concat(getTarget())
    : targets;

const TargetManager = {
    moveTargets,
    addTarget,   
    getTarget,
}

export default TargetManager;

