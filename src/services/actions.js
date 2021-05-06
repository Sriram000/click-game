const getActions = (global, setState, targetConfig) => {
    const { score } = targetConfig;
    const increaseScore = () => setState({
        ...global.state,
        score: global.state.score + score,
    })
    
    return {
        increaseScore,
    }
}

export default getActions;