import context from "../core/context";

const Target = (target) => {
    const { actions } = context;
    const { id, x, y, height, width } = target;

    const style = {
        position: "absolute",
        top: `${ y - height / 2 }%`,
        left: `${ x - width / 2 }%`,
        height: `${ height }vw`,
        width: `${ width }vw`,
        cursor: "crossHair",
    }

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img 
            key={ id }
            src={ target.image }
            style={ style }
            onClick={ () => {
                actions.removeTarget(target);
                actions.increaseScore(target);
            } }/>        
    );
}

export default Target;

