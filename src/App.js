import './App.css';
import React, { useState, useEffect } from 'react';
import Board from './components/Board.js';
import targetConfig from '../src/data/config.js';
import game from './services/game.js';

const buttonStyle = {
  position: "absolute",
  top: "0%",
  left: "0%",
}

let next;

function App() {
  
  const [state, setState] = useState({});

  console.log("Rendering");

  useEffect(()=>{
    next = game(targetConfig, setState);
  }, []);

  return (
    <div className="App">
      { Board(targetConfig, state) }
      <p> { state.color } { state.targetX } { state.targetY } </p>
      <button onClick = { next } style = { buttonStyle }> Next </button> 
    </div>
    );
  }
  
  export default App;
  