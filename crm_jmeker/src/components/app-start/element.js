import React, { Component } from "react";
import { Text, View } from "react-native";
import { actions } from "./actions.js";

const mapStateToProps = (state, ownProps) => {

  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeLogInStateToTrue: () => {
      let changeState = actions["changeStateLoggedIn"];

      dispatch(changeState());
    },

    changeLogInStateToFalse: () => {
      let changeState = actions["changeStateNotLogged"];

      dispatch(changeState());
    }
  }
}

class TestClass extends Component {
  render() {
    return (
      <View>
        <Text>Alandanal</Text>
      </View>
    )
  }
}

export default TestClass;