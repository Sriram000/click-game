import React, { useState } from 'react';
import Marker from './Marker.js';
import Target from './Target.js';

var randomBetween= function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

const colors = ["yellow", "green", "purple"];

const Board = (boxConfig) => {

    const [state, setState] = useState({ 
        color: colors[0],
        boxX: 50 - boxConfig.width / 2,
        boxY: 50 - boxConfig.height / 2,
    });

    const next = () => {
        const randomNumber = randomBetween(0, colors.length - 1);
        setState({ 
            color: colors[randomNumber],
            boxX: randomBetween(0, 100 - boxConfig.width),
            boxY: randomBetween(0, 100 - boxConfig.height), 
        });     
    }

    const boardStyle = {
        height: "100%",
        width: "100%",
        position: "absolute",
    }

    const buttonStyle = {
        position: "absolute",
        top: "0%",
        left: "0%",
    }

    return (
        <div style={ boardStyle }>
            { Target(boxConfig, state) } 
            { Marker() }
            <p> { state.color } { state.boxX } { state.boxY } </p>
            <button onClick = { next } style = { buttonStyle }> Next </button> 
        </div>
    );
}

export default Board;