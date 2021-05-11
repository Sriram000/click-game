import context from "../core/context";
import background from '../image/mosquito.png';

const Target = (target) => {
    const { config, actions } = context;
    const { width, height } = config;
    const { id, x, y } = target;

    const style = {
        position: "absolute",
        top: `${ y }%`,
        left: `${ x }%`,
        height: `${ target.size * height }vw`,
        width: `${ target.size * width }vw`,
        cursor: "crossHair",
    }

    return (
        <img 
            key={ id }
            src={ background }
            style={ style }
            onClick={ () => actions.increaseScore(target) }/>        
    );
}

export default Target;

