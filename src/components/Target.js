const Target = (targetConfig, state, actions) => {

    console.log(actions);

    const {width, height, textSize} = targetConfig;
    const { targetX, targetY, color} = state;
    const { increaseScore } = actions;
    console.log(increaseScore);

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
        <div style = {style} onClick = { increaseScore }> Click Me! </div>   
    );
}

export default Target;