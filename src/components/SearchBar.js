import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Button } from 'react-native-web';

const SearchBar = ({term, onTermChange}) => {


  return <View style={styles.backgroundStyle}>
  <Feather name="search" style={styles.iconStyle} />
  <TextInput 
    value={term} 
    onChangeText={newTerm => onTermChange(newTerm)} 
    style={styles.inputStyle} 
    autoCapitalize='none' 
    autoCorrect={false}/>
  </View>;

 
};

const styles = StyleSheet.create({
 backgroundStyle: {
  backgroundColor: '#e9e9e9',
  height: 50,
  borderRadius: 5,
  marginHorizontal: 15,
  flexDirection: 'row',
  marginTop: 10,
 
 },
  inputStyle: {
   flex: 1,
   fontSize: 18,
  },
  iconStyle: {
   fontSize: 35,
   alignSelf: 'center',
   marginHorizontal: 15,
  }

});

export default SearchBar;