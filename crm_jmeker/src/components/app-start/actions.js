const CHANGE_STATE_LOGGED_IN = "CHANGE_STATE_LOGGED_IN";
const CHANGE_STATE_NOT_LOGGED = "CHANGE_STATE_NOT_LOGGED";

function changeStateLoggedIn() {
  return {
    type: CHANGE_STATE_LOGGED_IN
  }
}

function changeStateNotLogged() {
  return {
    type: CHANGE_STATE_NOT_LOGGED
  }
}

let actions = {
  changeStateLoggedIn,
  changeStateNotLogged
}

let types = {
  CHANGE_STATE_LOGGED_IN,
  CHANGE_STATE_NOT_LOGGED
}

export {
  types,
  actions
}