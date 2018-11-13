import React, { Component } from "react";
import { Text, View } from "react-native";
import { actions } from "./actions.js";
import {firebase} from "firebase";

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
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCRTgIvyrCtfBgn_-l3ZgqJEA9G2HxmDd8",
      authDomain: "crm-mobile-17d65.firebaseapp.com",
      databaseURL: "https://crm-mobile-17d65.firebaseio.com",
      projectId: "crm-mobile-17d65",
      storageBucket: "crm-mobile-17d65.appspot.com",
      messagingSenderId: "1047706190643"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    })
  }

  render() {
    const aa = requireAll(require.context("./", true, '/index\.js'));

    return (
      <View>
        <Text>{this.state.loggedIn}</Text>
      </View>
    )
  }
}

export default TestClass;