/* global module */


const provider = () => {
  import Redux from "redux";
  const ReducerProvider = require("./reducer-provide.js").default();

  return {
    getMainStore: (initialState = {}) => {
      let mainReducer = ReducerProvider.getMainReducer();
      return Redux.createStore(mainReducer, initialState);
    }
  };
};

export default provider;