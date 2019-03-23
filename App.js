import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './src/components/Form.js'
import List from './src/components/List.js'


class App extends Component {
  state = {
    places: []
  }

  onPlaceAdded = (placeName) => {
    this.setState( prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }

  onItemDelete = (index) => {
    // console.log("id", id)
    // const removeItem = this.state.places.filter(element => {
    //   console.log("element.id", element.id)
    //   if (element.id === id) {
    //   }
    //   return !element
    // })
    // this.setState({
    //   places: removeItem
    // })
    this.setState(prevState => {
      return {
        places: 
        prevState.places.filter((place, i) => {
          return i !== index
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Form onPlaceAdded={this.onPlaceAdded} />
        <List 
          places={this.state.places}
          onItemDelete={this.onItemDelete}
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



