import React, { useState, useEffect } from 'react';
import getContext from './core/getContext';
import context from "./core/context";
import config from '../src/data/config';
import initialState from "./data/initialState";
import actions from './services/actions';
import start from './services/start';
import Score from './components/score';
import Lives from './components/lives';
import GameScreen from './components/gameScreen';
import GameOverScreen from './components/gameOverScreen';

function App() {
  const [state, setState] = useState(initialState);
  getContext(context, { actions, config, state, setState });
  useEffect(start, []);
  
  const Screen = state.lives === 0 ? GameOverScreen : GameScreen;

  return (
      <div className="App">
        { Screen() } 
        { Score() }
        { Lives() }
      </div>
    );
  }
  
  export default App;
  