import context from "../core/context";
import background from '../image/mosquito.jpg';

const Target = () => {
    const { config, state, actions } = context;
    const { width, height } = config;
    const { targetX, targetY } = state;

    const style = {
        position: "absolute",
        top: `${ targetY }%`,
        left: `${ targetX }%`,
        height: `${ height }%`,
        width: `${ width }%`,
    }

    return (
        <img src= {background}
            style = {style}
            onClick = { actions.increaseScore }/>        
    );
}

export default Target;

