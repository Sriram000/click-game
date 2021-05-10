import context from "../core/context";
import background from '../image/mosquito.jpg';

const Target = () => {
    const { config, state, actions } = context;
    const { width, height } = config;
    const { x, y } = state.target;

    const style = {
        position: "absolute",
        top: `${ y }%`,
        left: `${ x }%`,
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

