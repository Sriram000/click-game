const start = (context) => {
    const { config, actions } = context;
    const { delay } = config;
    
    setInterval(() => actions.moveTarget(context), delay);
}

export default start;