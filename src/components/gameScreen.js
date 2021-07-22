import Board from './board';
import Target from './target';
import context from '../core/context';
import Power from './power';

const GameScreen = () => 
    <>
        { Board(context) }
        { context.state.targets.map(Target) }
        { context.state.powers.map(Power) }
    </>

export default GameScreen;



//add logic bomb, remove state.powers reset, no move//