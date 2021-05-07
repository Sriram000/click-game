import React, { useState, useEffect } from 'react';
import getContext from './core/getContext';
import context from "./core/context";
import config from '../src/data/config';
import initialState from "./data/initialState";
import actions from './services/actions';
import start from './services/start';
import Board from './components/board';
import Target from './components/target';
import Score from './components/score';

function App() {
  const [state, setState] = useState(initialState);
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
  