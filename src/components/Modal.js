import React from 'react';
import { StyleSheet, Modal, View, Image, Text, Button } from 'react-native';


const Modal = props => {

  return (
    <Modal>
      <View>
        <Image src={props.placeImage}/>
        <Text>{props.placeName}</Text>
        <Button />
        <Button />

      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    width: "100%"
  }
})

export default Modal