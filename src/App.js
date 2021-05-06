import './App.css';
import React, { useState } from 'react';
import Board from './components/Board.js';
import targetConfig from '../src/data/config.js';

const buttonStyle = {
  position: "absolute",
  top: "0%",
  left: "0%",
}

const { colors } = targetConfig;

function App() {
  
  var randomBetween= function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
  
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
  return (
    <div className="App">
      { Board(targetConfig, state) }
      <p> { state.color } { state.targetX } { state.targetY } </p>
      <button onClick = { next } style = { buttonStyle }> Next </button> 
    </div>
    );
  }
  
  export default App;
  