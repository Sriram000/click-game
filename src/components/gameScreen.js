import Board from './board';
import Target from './target';
import context from '../core/context';
import Power from './power';

const GameScreen = () => 
    <>
        { Board(context) }
        { context.state.targets.map(Target) }
        { Power() }
    </>

export default GameScreen;