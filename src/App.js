import React, { useState, useEffect } from 'react';
import updateContext from '@laufire/resist';
import context from "./core/context";
import ticker from './services/ticker';
import Game from './components/game';
import './App.css';

function App() {
  const [state, setState] = useState(context.seed);
  updateContext(context, { state, setState });

  useEffect(ticker.start, []);
  
  return (
      <div className="App">
      { Game() }
      </div>
    );
  }
  
  export default App;
  