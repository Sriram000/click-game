import React, { useState, useEffect } from 'react';
import Board from './components/board.js';
import Target from './components/target.js';
import targetConfig from '../src/data/config.js';
import game from './services/game.js';
import Score from './components/score';
import getActions from './services/actions.js';

const global = {};

function App() {
  
  const [state, setState] = useState({});
  global.state = state; //Hacky way to pass the state to services.
  const actions = getActions(global, setState, targetConfig);
  const context = { targetConfig, state, actions };

  useEffect(() => global.actions = game(targetConfig, global, setState), []);

  return (
    <div className="App">
      { Board(context) }
      { Target(context) } 
      { Score(context) }
    </div>
    );
  }
  
  export default App;
  