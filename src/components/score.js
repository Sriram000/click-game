const Score = (state) => {

    const style = {
        position: "absolute",
        width: "5%",
        height: "10%",
        background: "silver",
        fontSize: "30pt",
    }

    return (
        <div style = {style}> { state.score } </div>
    );
}

export default Score;