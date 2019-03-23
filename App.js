import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './src/components/Form.js'
import List from './src/components/List.js'


class App extends Component {
  state = {
    places: []
  }

  placeAddedHandler = (placeName) => {
    this.setState( prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Form
          onPlaceAdded={this.placeAddedHandler}
        />

        <List
          places={this.state.places}
        />

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
  listContainer: {
    width: "100%",
  }

});

export default App



