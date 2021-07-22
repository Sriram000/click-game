import { rndBetween, rndValue, rndString } from "@laufire/utils/random";
import { keys } from '@laufire/utils/collection';
import config from "../core/config";

const { powers } = config;
const powerKeys = keys(powers);
const addValue = 1 / powers.bomb.addProbability;
const removeValue = 1 / powers.bomb.removeProbability;

const getRandomX = ({ width }) => rndBetween(width / 2, 100 - width / 2);

const getRandomY = ({ height }) => rndBetween(height / 2, 100 - height / 2);

const getPower = ({ x, y, type } = {}) => {
    type = type || rndValue(powerKeys);
    const typeConfig = powers[type];

    return {
        id: rndString(8), 
        x: (x !== undefined ? x : getRandomX(typeConfig)),
        y: (y !== undefined ? y : getRandomY(typeConfig)),
        ...typeConfig,
    };
}

const addPower = (powers) => rndBetween(1, addValue) === 1 && powers.length === 0
    ? powers.concat(getPower())
    : powers;

const removePower = (powers) => (powers.length === 1 && rndBetween(1, removeValue) === 1)
    ? [] 
    : powers;

const PowerManager = {
    getPower,
    addPower,
    removePower
};

export default PowerManager;