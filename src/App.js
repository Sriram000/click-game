import React, { useState, useEffect } from 'react';
import getContext from './core/getContext.js';
import context from "./core/context";
import config from '../src/data/config.js';
import getInitialState from "./services/getInitialState.js";
import actions from './services/actions.js';
import start from './services/start.js';
import Board from './components/board.js';
import Target from './components/target.js';
import Score from './components/score';

const iS = getInitialState({ config });

function App() {
  const [state, setState] = useState(iS);
  getContext(context, { actions, config, state, setState });
  useEffect(start, []);

  return (
      <div className="App">
        { Board() }
        { Target() } 
        { Score() }
      </div>
    );
  }
  
  export default App;
  