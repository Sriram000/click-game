const Target = (targetConfig, state, actions) => {

    const {width, height, textSize} = targetConfig;
    const { targetX, targetY, color} = state;
    const { increaseScore } = actions;

    const style = {
        height: `${ height }%`,
        width: `${ width }%`,
        top: `${ targetY }%`,
        left: `${ targetX }%`,
        position: "absolute",
        fontSize: textSize,
        background: color,
    }

    return (
        <div style = {style} onClick = { increaseScore }> </div>   
    );
}

export default Target;