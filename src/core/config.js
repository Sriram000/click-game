import mosquitoImage from '../image/mosquito.png';
import antImage from '../image/ant.png';
import bombImage from '../image/bomb.png';

const config = {
    tickerDelay: 1000 * 1.25,
    lives: 3,
    maxTargets: 5,
    targets: {
        mosquito: {
            score: 1,
            image: mosquitoImage, 
            height: 10,
            width: 20,
        },
        ant:{
            score: 5,
            image: antImage, 
            height: 5,
            width: 10,
        },
    },
    maxPowers: 1,
    powers: {
        bomb: {
            minimum: 1,
            maximum: 3,
            image: bombImage,
            height: 10,
            width: 5,
        },
    },
}

export default config;