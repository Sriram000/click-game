import RestartButton from './restartButton';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "5%",
    height: "10%",
    background: "red",
    fontSize: "30pt",
    textAlign: "center",
}

const GameOverScreen = () =>
    <div style= { style }> 
        <div> GAME OVER </div> 
        <div>{ RestartButton() }</div>
    </div>

export default GameOverScreen;