import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem.js'


class App extends Component {
  state = {
    placeName: "",
    places: []
  }

  placeNameChangeHandler = (e) => {
    this.setState({
      placeName: e,
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
    // this.setState({
    //   places: [...this.state.places, this.state.placeName]
    // })
  }


  render() {
    const placesOutput = this.state.places.map((place, idx) => (
      <Text key={idx}>{place}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="an awesome place"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>
          {placesOutput}
        </View>
        <ListItem />
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
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }

});

export default App



