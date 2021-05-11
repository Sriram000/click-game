import RestartButton from './restartButton';

const width = 20;
const height = 20;

const style = {
    position: "absolute",
    top: `${ 50 - height / 2 }%`,
    left: `${ 50 - width / 2 }%`,
    width: `${ width }%`,
    height: `${ height }%`,
    background: "red",
    fontSize: "30pt",
    textAlign: "center",
}

const buttonStyle = {
    cursor: "pointer",
}

const GameOverScreen = () =>
    <div style= { style }> 
        <div> GAME OVER </div> 
        <div style={ buttonStyle }>{ RestartButton() }</div>
    </div>

export default GameOverScreen;