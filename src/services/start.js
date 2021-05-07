import context from "../core/context";

const start = () => {
    const { config, actions } = context;
    const { delay } = config;
    
    setInterval(actions.moveTarget, delay);
}

export default start;