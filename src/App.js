import './App.css';
import React, { useState, useEffect } from 'react';
import Board from './components/Board.js';
import Target from './components/Target.js';
import targetConfig from '../src/data/config.js';
import game from './services/game.js';
import Score from './components/score';
import getActions from './services/actions.js';

const global = {};

function App() {
  
  const [state, setState] = useState({});
  global.state = state; //Hacky way to pass the state to services.
  const actions = getActions(global, setState, targetConfig);

  useEffect(() => global.actions = game(targetConfig, global, setState), []);

  return (
    <div className="App">
      { Board( targetConfig, state, actions ) }
      { Target(targetConfig, state, actions) } 
      { Score( state )}
    </div>
    );
  }
  
  export default App;
  