const getInitialState = ({ config }) => {
    return { 
      targetX: 50 - config.width / 2,
      targetY: 50 - config.height / 2,
      score: 0,
    }
}

export default getInitialState;