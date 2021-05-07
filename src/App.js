import React, { useState, useEffect } from 'react';
import getContext from './core/getContext.js';
import config from '../src/data/config.js';
import getInitialState from "./services/getInitialState.js";
import actions from './services/actions.js';
import start from './services/start.js';
import Board from './components/board.js';
import Target from './components/target.js';
import Score from './components/score';

function App() {
  const [state, setState] = useState(getInitialState({ config }));
  const context = getContext({ actions, config, state, setState });

  useEffect(() => start(context), []);

  return (
    <div className="App">
      { Board(context) }
      { Target(context) } 
      { Score(context) }
    </div>
    );
  }
  
  export default App;
  