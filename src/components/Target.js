const Target = (targetConfig, state) => {

    const {width, height, textSize} = targetConfig;
    const { targetX, targetY, color} = state;

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
        <div style = {style}> Click Me! </div>   
    );
}

export default Target;