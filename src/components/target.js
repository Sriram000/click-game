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
        height: `${ height }vw`,
        width: `${ width }vw`,
        cursor: "crossHair",
    }

    return (
        <img 
            key={ id }
            src={ background }
            style={ style }
            onClick={ actions.increaseScore }/>        
    );
}

export default Target;

