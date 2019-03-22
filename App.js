import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props>{
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
        <View>
          <TextInput
            placeholder="an awesome place"
            style={{ width: 300 }}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="Add"
          />
        </View>
      </View>
        );
      }
    }
    
const styles = StyleSheet.create({
          container: {
          padding: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      },
      
    });
    
    
    
