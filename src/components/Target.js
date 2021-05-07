import background from '../image/mosquito.jpg';

const Target = (targetConfig, state, actions) => {

    const {width, height } = targetConfig;
    const { targetX, targetY } = state;
    const { increaseScore } = actions;

    const style = {
        height: `${ height }%`,
        width: `${ width }%`,
        top: `${ targetY }%`,
        left: `${ targetX }%`,
        position: "absolute",
    }

    return (
        <img src= {background} style = {style} onClick = { increaseScore }/>        
    );
}

export default Target;

