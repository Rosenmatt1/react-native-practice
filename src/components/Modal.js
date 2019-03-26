import React from 'react';
import { StyleSheet, Modal, View, Image, Text, Button } from 'react-native';


const Modal = props => {

  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide" >

      <View style={styles.modal}>
        <Image source={props.selectedPlace ? props.selectedPlace.image : null} />
        {/* <Image source={props.selectedPlace.image} /> */}
        <Text> {props.selectedPlace ? props.selectedPlace.name : null} </Text>
        {/* <Text> {props.selectedPlace.name} </Text> */}
        <Button title="delete"/>
        <Button title="close"/>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    margin: 22;
  }
})

export default Modal