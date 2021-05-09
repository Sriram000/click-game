import React, { useState, useEffect } from 'react';
import getContext from '@laufire/resist';
import context from "./core/context";
import ticker from './services/ticker';
import Score from './components/score';
import Lives from './components/lives';
import GameScreen from './components/gameScreen';
import GameOverScreen from './components/gameOverScreen';

function App() {
  const [state, setState] = useState(context.seed);
  getContext(context, { state, setState, actions: context.actions });
  
  useEffect(ticker.start, []);
  
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
  