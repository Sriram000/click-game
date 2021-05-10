import config from '../core/config';
import { rndBetween } from "@laufire/utils/random";

const TargetManager = {

    moveTargets: (targets) => targets.map(()=> ({
        x: rndBetween(0, 100 - config.width),
        y: rndBetween(0, 100 - config.height), 
    })),

    addTarget: (targets) => targets.concat({
        x: rndBetween(0, 100 - config.width),
        y: rndBetween(0, 100 - config.height), 
    }),
}


export default TargetManager;