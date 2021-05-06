import './App.css';
import Board from './components/Board.js';
import boxConfig from '../src/data/config.js';

function App() {
  return (
    <div className="App">
      { Board(boxConfig) }
    </div>
  );
}

export default App;
