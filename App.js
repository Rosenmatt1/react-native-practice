import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './src/components/Form.js'
import List from './src/components/List.js'
// import Modal from './src/components/Modal.js'
// import placeImage from './src/assets/chuck-norris.png'

class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: String(Math.random()),
          name: placeName,
          image: {
            url: "https://image.freepik.com/free-photo/tropical-beach-samoa_53876-13199.jpg"
          }
        })
      };
    });
  };

  // onItemDelete = key => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.filter(place => {
  //         return place.key !== key;
  //       })
  //     };
  //   });
  // };

  selectedItem = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
      
        {/* <Modal selectedPlace={this.state.selectedPlace}/> */}
        <Form onPlaceAdded={this.placeAddedHandler} />
        <List
          places={this.state.places}
          // onItemDelete={this.onItemDelete}
          selectedItem={this.selectedItem}
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



