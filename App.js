import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import ListItem from './src/components/ListItem.js'
import Form from './src/components/Form.js'


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
  }

  render() {

    const placesOutput = this.state.places.map((place, idx) => (
      <ListItem key={idx} placeName={place} />
    ))
    
    return (
      <View style={styles.container}>

        <Form 
          // style={styles.inputContainer}
          placeName={this.state.placeName}
          placeNameChangeHandler={this.placeNameChangeHandler} 
          placeSubmitHandler={this.placeSubmitHandler}
        />

        <View 
          style={styles.listContainer}
          placeName={this.state.placeName}>
            {placesOutput}
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
  listContainer: {
    width: "100%",
  }

});

export default App



