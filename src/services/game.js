import randomBetween from './lib.js';

const game = (targetConfig, setState) => {

    const { colors, width, height } = targetConfig;
    
    setState({ 
        color: colors[0],
        targetX: 50 - targetConfig.width / 2,
        targetY: 50 - targetConfig.height / 2,
    });
    
    const next = () => {
        const randomNumber = randomBetween(0, colors.length - 1);
        setState({ 
            color: colors[randomNumber],
            targetX: randomBetween(0, 100 - width),
            targetY: randomBetween(0, 100 - height), 
        });     
    }

    setInterval(next, 1000);
}

export default game;