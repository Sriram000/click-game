import './App.css';
import React, { useState, useEffect } from 'react';
import Board from './components/Board.js';
import targetConfig from '../src/data/config.js';
import game from './services/game.js';

function App() {
  
  const [state, setState] = useState({});

  useEffect(() => game(targetConfig, setState), []);

  return (
    <div className="App">
      { Board(targetConfig, state) }
      <p> { state.color } { state.targetX } { state.targetY } </p>
    </div>
    );
  }
  
  export default App;
  