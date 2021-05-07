const boardStyle = {
    position: "absolute",
    height: "100%",
    width: "100%",
}

const Board = ({ actions }) => 
    <div style={ boardStyle } onClick = { actions.decreaseScore }></div>

export default Board;