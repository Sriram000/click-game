import config from '../core/config';
import { rndBetween, rndString } from "@laufire/utils/random";

const TargetManager = {

    moveTargets: (targets) => targets.map(()=> ({
        x: rndBetween(0, 100 - config.width),
        y: rndBetween(0, 100 - config.height), 
    })),

    addTarget: (targets) => targets.concat({
        id: rndString(8), 
        x: rndBetween(0, 100 - config.width),
        y: rndBetween(0, 100 - config.height),
    }),

    getTarget: ({ x, y }) => ({
        id: rndString(8), 
        x: x !== undefined ? x : rndBetween(0, 100 - config.width),
        y: y !== undefined ? y : rndBetween(0, 100 - config.height),
    }),
}


export default TargetManager;