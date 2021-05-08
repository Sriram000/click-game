import context from "../services/context";

const style = {
    position: "absolute",
    width: "5%",
    height: "10%",
    top: "0%",
    left: "0%",
    background: "silver",
    fontSize: "30pt",
    textAlign: "center",
}

const Score = () =>  
    <div style = {style}> { context.state.score } </div>
           
export default Score;