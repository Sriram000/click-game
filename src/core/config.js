const config = {
    height: 10,
    width: 20,
    tickerDelay: 1000 * 1.25,
    lives: 3,
    maxTargets: 3,
    targetTypes: {
        normal: {
            size: 1,
            score: 1,
        },
        super:{
            size: 0.5,
            score: 5,
        },
    },
}

export default config;