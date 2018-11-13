/* global module */
const reduceReducers = (...reducers) => {
  return (state, action) => {
    return reducers.reduce((aState, reducerFn) => {
      return reducerFn(aState, action);
    }, state);
  };
};

const loadReducers = () => {
  const componentProvider = require("./component-provide.js").default();

  let componentsReducers = componentProvider
                              .getAll()
                              .map((component) => component.reducer);
  

  return componentsReducers;
};

const provider = () => {
  let reducers = null;

  return {
    getMainReducer: () => {
      if (!reducers)
        reducers = loadReducers();

      return reduceReducers(...reducers);
    }
  };
};

export default provider