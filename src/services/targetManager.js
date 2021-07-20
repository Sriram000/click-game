import config from '../core/config';
import { rndBetween, rndString, rndValue } from "@laufire/utils/random";
import { keys } from '@laufire/utils/collection';

const { maxTargets, targets } = config;
const targetTypeKeys = keys(targets);

const getRandomX = ({ width }) => rndBetween(width / 2, 100 - width / 2);

const getRandomY = ({ height }) => rndBetween(height / 2, 100 - height / 2);

const getTarget = ({ x, y, type } = {}) => {
    type = type || rndValue(targetTypeKeys);
    const typeConfig = targets[type];

    return {
        id: rndString(8), 
        x: (x !== undefined ? x : getRandomX(typeConfig)),
        y: (y !== undefined ? y : getRandomY(typeConfig)),
        ...typeConfig,
    };
}

const moveTargets = (targets) => targets.map((target) => ({
    ...target,
    x: getRandomX(target),
    y: getRandomY(target),
}));

const addTarget = (targets) => targets.length < maxTargets
    ? targets.concat(getTarget())
    : targets;

const removeTarget = (targets, target) => 
    targets.filter((current) => current.id !== target.id);

const TargetManager = {
    moveTargets,
    addTarget,   
    getTarget,
    removeTarget,
}

export default TargetManager;

