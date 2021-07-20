import mosquitoImage from '../image/mosquito.png';
import antImage from '../image/ant.png';

const config = {
    tickerDelay: 1000 * 1.25,
    lives: 3,
    maxTargets: 3,
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
}

export default config;