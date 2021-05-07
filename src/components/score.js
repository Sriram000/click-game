const style = {
    position: "absolute",
    width: "5%",
    height: "10%",
    background: "silver",
    fontSize: "30pt",
}

const Score = ({state}) =>  
    <div style = {style}> { state.score } </div>
           
export default Score;