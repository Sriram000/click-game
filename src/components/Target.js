const Target = (boxConfig) => {

    const {boxY, boxX, width, height } = boxConfig;
    const adjustedY = boxY - height / 2;
    const adjustedX = boxX - width / 2;

    const style = {
        background: "white",
        height: `${ height }%`,
        width: `${ width }%`,
        top: `${ adjustedY }%`,
        left: `${ adjustedX }%`,
        position: "absolute",
    }

    return (
        <div style = {style}> Click Me! </div>
    );
}

export default Target;