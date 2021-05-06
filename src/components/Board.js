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
        boxX: 50,
        boxY: 50,
    });

    const next = () => {
        const randomNumber = randomBetween(0, colors.length - 1);
        setState({ 
            color: colors[randomNumber],
            boxX: randomBetween(0, 100),
            boxY: randomBetween(0, 100), 
        });     
    }

    const style = {
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
        <div style={ style }>
            <p> { state.color } </p>
            { Target(boxConfig, state) } 
            { Marker() }
            <button onClick = { next } style = { buttonStyle }> Next </button> 
        </div>
    );
}

export default Board;