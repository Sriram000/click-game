import Board from './board';
import Target from './target';
import context from '../core/context';

const GameScreen = () => 
    <>
        { Board(context) }
        { context.state.targets.map(Target) }
    </>

export default GameScreen;