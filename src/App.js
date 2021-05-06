import './App.css';
import Board from './components/Board.js';
import targetConfig from '../src/data/config.js';

function App() {
  return (
    <div className="App">
      { Board(targetConfig) }
    </div>
  );
}

export default App;
