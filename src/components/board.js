const boardStyle = {
    position: "absolute",
    height: "100%",
    width: "100%",
}

const Board = (context) => 
    <div
        style={ boardStyle }
        onClick = { () => context.actions.decreaseScore(context) }>
    </div>

export default Board;