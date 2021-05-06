const Target = (boxConfig, state) => {

    const {width, height, textSize} = boxConfig;
    const { boxX, boxY, color} = state;
    const adjustedY = boxY - height / 2;
    const adjustedX = boxX - width / 2;

    const style = {
        height: `${ height }%`,
        width: `${ width }%`,
        top: `${ adjustedY }%`,
        left: `${ adjustedX }%`,
        position: "absolute",
        fontSize: textSize,
        background: color,
    }

    return (
        <div style = {style}> Click Me! </div>
    );
}

export default Target;