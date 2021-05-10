import context from "../core/context";
import background from '../image/mosquito.jpg';
import { rndString } from "@laufire/utils/random";

const Target = (target) => {
    const { config, actions } = context;
    const { width, height } = config;
    const { x, y } = target;

    const style = {
        position: "absolute",
        top: `${ y }%`,
        left: `${ x }%`,
        height: `${ height }%`,
        width: `${ width }%`,
    }

    return (
        <img 
            key={ rndString(8) }
            src={ background }
            style={ style }
            onClick={ actions.increaseScore }/>        
    );
}

export default Target;

