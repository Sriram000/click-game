import context from "../core/context";
import bomb from '../components/gameScreen';

const Ticker = () => {
    const start = () => {
        const { config, actions } = context;
        const { tickerDelay } = config;
        
        setInterval(() => {
            actions.moveTargets();
            actions.addTarget();
            bomb();
        }, tickerDelay);
    }
    
    return {
        start,
    }
}

const ticker = Ticker();

export default ticker;