import './App.css';
import React, { useState, useEffect } from 'react';
import Board from './components/Board.js';
import targetConfig from '../src/data/config.js';
import game from './services/game.js';
import Score from './components/score';

const global = {};

function App() {
  
  const [state, setState] = useState({});
  global.state = state; //Hacky way to pass the state to services.

  useEffect(() => game(targetConfig, global, setState), []);

  return (
    <div className="App">
      { Board( targetConfig, state ) }
      { Score( state )}
    </div>
    );
  }
  
  export default App;
  