import Target from './Target.js';

const Board = (targetConfig, state) => {

    const boardStyle = {
        height: "100%",
        width: "100%",
        position: "absolute",
    }

    return (
        <div style={ boardStyle }>
            { Target(targetConfig, state) } 
        </div>
    );
}

export default Board;