import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#d6cbd3',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
      flexDirection:'row',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
  itemText: {
    maxWidth: '1000%',
  },
  circular: {
    width: 20,
    height: 20,
    borderColor: '#618685',
    borderWidth: 2,
    borderRadius: 5,
  }
});

export default Task;