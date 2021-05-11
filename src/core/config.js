import normalTargetImage from '../image/mosquito.png';
import superTargetImage from '../image/ant.png';

const config = {
    tickerDelay: 1000 * 1.25,
    lives: 3,
    maxTargets: 3,
    targetTypes: {
        normal: {
            score: 1,
            image: normalTargetImage, 
            height: 10,
            width: 20,
        },
        super:{
            score: 5,
            image: superTargetImage, 
            height: 5,
            width: 10,
        },
    },
}

export default config;