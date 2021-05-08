import context from "../services/context";

const start = () => {
    const { config, actions } = context;
    const { delay } = config;
    
    setInterval(actions.moveTarget, delay);
}

export default start;