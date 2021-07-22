import { React } from 'react';
import context from '../core/context';

const Power = (power) => {
    const { id, x, y, height, width } = power;

    const style = {
        position: "absolute",
        top: `${ y - height / 2 }%`,
        left: `${ x - width / 2 }%`,
        height: `${ height }vw`,
        width: `${ width }vw`,
        cursor: "crossHair",
    };
    
    return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
        key={ id }
        src={ power.image }
        style={ style }
        onClick={ () => context.actions.removeRandomTargets() }
    />
    );
}

export default Power;