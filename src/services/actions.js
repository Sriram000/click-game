const getActions = (global, setState) => {
    const increaseScore = () => setState({
        ...global.state,
        score: global.state.score + 1,
    })
    
    return {
        increaseScore,
    }
}

export default getActions;