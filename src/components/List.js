import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const List = props => {

  return (
    <FlatList 
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          // onItemPressed={() => props.onItemDelete(info.item.key)}
          onItemPressed={() => props.selectedItem(info.item.key)}
        />
      )}
    />  
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
})

export default List