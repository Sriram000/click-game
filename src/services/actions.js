const getActions = (global, setState, targetConfig) => {
    const { score } = targetConfig;
    const increaseScore = () => setState({
        ...global.state,
        score: global.state.score + score,
    })

    const decreaseScore = () => setState({
        ...global.state,
        score: global.state.score - score,
    })
    
    return {
        increaseScore,
        decreaseScore,
    }
}

export default getActions;