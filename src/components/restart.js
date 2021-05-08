import context from "../services/context";

const style = {
    position: "absolute",
    width: "10%",
    height: "10%",
    top: "55%",
    left: "55%",
    background: "silver",
    fontSize: "30pt",
    textAlign: "center",
}

const Restart = () => <div style = {style}
    onClick = { context.actions.restart }> Restart </div>

export default Restart;
