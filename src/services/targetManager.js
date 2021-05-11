import config from '../core/config';
import { rndBetween, rndString } from "@laufire/utils/random";

const { maxTargets, targetTypes } = config;

const getRandomX = ({ width }) => rndBetween(width / 2, 100 - width / 2);

const getRandomY = ({ height }) => rndBetween(height / 2, 100 - height / 2);

const getTarget = ({ x, y, type = "normal" } = {}) => {
    const typeConfig = targetTypes[type];

    return {
        id: rndString(8), 
        x: (x !== undefined ? x : getRandomX(typeConfig)),
        y: (y !== undefined ? y : getRandomY(typeConfig)),
        ...typeConfig,
    };
}

const moveTargets = (targets) => targets.map((target) => ({
    x: getRandomX(target),
    y: getRandomY(target),
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

