import React, { useState } from 'react';
import Marker from './Marker.js';
import Target from './Target.js';

var randomBetween= function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 const colors = ["yellow", "green", "purple"];

const Board = (boxConfig) => {

    const [state, setState] = useState({ color: colors[0] });

    const changeBackground = () => {
        const randomNumber = randomBetween(0, colors.length - 1);
         setState({ color: colors[randomNumber] });
        
    }

    const style = {
        background: state.color,
        height: "100%",
        width: "100%",
        position: "absolute",
    }

    return (
        <div style={ style }>
            <p> { state.color } </p>
            { Target(boxConfig) } 
            { Marker() }
            <button onClick = { changeBackground }> ChangeBackground </button> 
        </div>
    );
}

export default Board;