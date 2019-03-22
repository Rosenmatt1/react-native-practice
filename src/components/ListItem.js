import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListItem = (props) => (
  <View styles={styles.listItem}>
    <Text> {props.placeName} </Text>
  </View>
)

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
  }
})

export default ListItem