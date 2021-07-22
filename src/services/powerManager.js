import { rndBetween, rndValue, rndString } from "@laufire/utils/random";
import { Keys } from '@laufire/utils/collection';
import config from "../core/config";

const { powers } = config;
const powerKeys = Keys(powers);

const getRandomX = ({ width }) => rndBetween(width / 2, 100 - width / 2);

const getRandomY = ({ height }) => rndBetween(height / 2, 100 - height / 2);

const getPower = ({ x, y, type }) => {
    type = type || rndValue(powerKeys);
    const typeConfig = powers[type];

    return {
        id: rndString(8), 
        x: (x !== undefined ? x : getRandomX(typeConfig)),
        y: (y !== undefined ? y : getRandomY(typeConfig)),
        ...typeConfig,
    };
}

const addPower = (powers) => rndBetween(1, 5) === 1 
    ? powers.concat(getPower())
    : powers;

const PowerManager = {
    getPower,
    addPower,
};

export default PowerManager;