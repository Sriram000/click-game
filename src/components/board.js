import context from "../services/context";

const boardStyle = {
    position: "absolute",
    height: "100%",
    width: "100%",
}

const Board = () => 
    <div
        style={ boardStyle }
        onClick = { context.actions.decreaseLives }>
    </div>

export default Board;