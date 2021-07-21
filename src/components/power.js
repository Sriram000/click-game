import { React } from 'react';
import config from '../core/config';
import context from '../core/context';

const { image } = config.powers.bomb;

const style = {
    position: 'absolute',
    height: '10%',
    width: '5%',
};

const Power = () => 
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
        src={ image }
        style={ style }
        onClick={ () => context.actions.removeRandomTargets() }
    />

export default Power;