import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {
  return <View style={styles.background}>
  <Feather name="search" size={30} color="black" style={styles.icon}/>
  </View>;
};

const styles = StyleSheet.create({
 background: {
  backgroundColor: '#e9e9e9',
  height: 50,
  borderRadius: 5,
  marginHorizontal: 15,
 },
 icon: {
  top: 10,
  left: 10,
 }
});

export default SearchBar;