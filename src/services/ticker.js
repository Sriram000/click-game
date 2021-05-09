import context from "../services/context";

const Ticker = () => {
    const start = () => {
        const { config, actions } = context;
        const { delay } = config;
        
        setInterval(actions.moveTarget, delay);
    }
    
    return {
        start,
    }
}

const ticker = Ticker();

export default ticker;