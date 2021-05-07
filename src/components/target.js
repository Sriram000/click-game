import background from '../image/mosquito.jpg';

const Target = (context) => {
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
            onClick = { () => actions.increaseScore(context) }/>        
    );
}

export default Target;

