import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

  export default class App extends Component <Props>{
    state = {
      placeName: ""
    }

    placeNameChangeHandler = (e) => {
      this.setState({
        placeName: e
      })
     
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="an awesome place"
          style={{width: 300}}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 30,
    alignItems: 'center',
    // flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


{/* <Text style={styles.welcome}>Welcome to Mateo Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
