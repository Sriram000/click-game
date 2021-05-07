import randomBetween from './lib.js';

const game = (targetConfig, global, setState) => {
    const { width, height, delay } = targetConfig;
    
    setState({ 
        targetX: 50 - targetConfig.width / 2,
        targetY: 50 - targetConfig.height / 2,
        score: 0,
    });

    const next = () => {

        setState({ 
            ...global.state,
            targetX: randomBetween(0, 100 - width),
            targetY: randomBetween(0, 100 - height), 
        });     
    }

    setInterval(next, delay);
}

export default game;