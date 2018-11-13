import {types} from "./actions.js";
const _ = require("lodash");

const appStart = (state = INITIAL_STATE, action) => {
  const CHANGE_STATE_LOGGED_IN = types["CHANGE_STATE_LOGGED_IN"];
  const CHANGE_STATE_NOT_LOGGED = types["CHANGE_STATE_NOT_LOGGED"];

  switch(action.type) {
    case CHANGE_STATE_LOGGED_IN:
      return _.merge({}, state, {
        login: {
          login_state: true
        }
      });
    case CHANGE_STATE_NOT_LOGGED:
      return _.merge({}, state, {
        login: {
          login_state: false
        }
      });
    default:
      return state;
  }
}

export default appStart;