import React from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'



const Form = (props) => (
  <View style={styles.container}>

    <TextInput
      placeholder="an awesome place"
      style={styles.placeInput}
      value={props.placeName}
      onChangeText={props.placeNameChangeHandler}
    />

    <Button
      title="Add"
      style={styles.placeButton}
      onPress={props.placeSubmitHandler}
    />

  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: "30%",
  },
})

export default Form