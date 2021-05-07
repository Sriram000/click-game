import background from '../image/mosquito.jpg';

const Target = ({ targetConfig, state, actions }) => {
    const {width, height } = targetConfig;
    const { targetX, targetY } = state;
    const { increaseScore } = actions;

    const style = {
        position: "absolute",
        top: `${ targetY }%`,
        left: `${ targetX }%`,
        height: `${ height }%`,
        width: `${ width }%`,
    }

    return (
        <img src= {background} style = {style} onClick = { increaseScore }/>        
    );
}

export default Target;

