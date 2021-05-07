const getContext = (() => {
  const store = {};

  return (inContext, name) => {
    const context = store[name] = store[name] || inContext;
    context.state = inContext.state;
    context.setState = inContext.setState;

    return context; 
  }
})();

export default getContext;