const Target = (boxConfig, state) => {

    const {width, height, textSize} = boxConfig;
    const { boxX, boxY, color} = state;

    const style = {
        height: `${ height }%`,
        width: `${ width }%`,
        top: `${ boxY }%`,
        left: `${ boxX }%`,
        position: "absolute",
        fontSize: textSize,
        background: color,
    }

    return (
        <div style = {style}> Click Me! </div>   
    );
}

export default Target;