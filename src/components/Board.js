import React, { useState } from 'react';
import Marker from './Marker.js';
import Target from './Target.js';

var randomBetween= function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

const colors = ["yellow", "green", "purple"];

const Board = (targetConfig) => {

    const [state, setState] = useState({ 
        color: colors[0],
        targetX: 50 - targetConfig.width / 2,
        targetY: 50 - targetConfig.height / 2,
    });

    const next = () => {
        const randomNumber = randomBetween(0, colors.length - 1);
        setState({ 
            color: colors[randomNumber],
            targetX: randomBetween(0, 100 - targetConfig.width),
            targetY: randomBetween(0, 100 - targetConfig.height), 
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
            { Target(targetConfig, state) } 
            { Marker() }
            <p> { state.color } { state.targetX } { state.targetY } </p>
            <button onClick = { next } style = { buttonStyle }> Next </button> 
        </div>
    );
}

export default Board;