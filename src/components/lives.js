import context from "../core/context";

const style = {
    position: "absolute",
    top: "0%",
    right: "0%",
    width: "5%",
    height: "10%",
    background: "silver",
    fontSize: "30pt",
    textAlign: "center",
}

const Lives = () => 
    <div style = {style}> { context.state.lives } </div>

export default Lives;