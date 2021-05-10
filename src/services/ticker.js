import context from "../core/context";

const Ticker = () => {
    const start = () => {
        const { config, actions } = context;
        const { tickerDelay } = config;
        
        setInterval(actions.moveTargets, tickerDelay);
    }
    
    return {
        start,
    }
}

const ticker = Ticker();

export default ticker;