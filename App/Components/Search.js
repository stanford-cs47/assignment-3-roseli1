/*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component, useState } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity, Dimensions, Keyboard } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes';

import { Ionicons } from '@expo/vector-icons';


export default function Search(props) {
  const [searchText, setSearchText] = useState('');

  enterSearch = () => {
    props.goSearch(searchText);
    setSearchText('');
    Keyboard.dismiss();
  }

    return (
      <View style={styles.searchBar} >
        <TextInput
          style={{marginLeft: 10, width: (80/100) * Dimensions.get('window').width,
          height: 30}}
          placeholder={'Search for News'}
          onChangeText={text => setSearchText(text)} // the "text"s here have to match
          onSubmitEditing={this.enterSearch}
          value={searchText}
        />
        <TouchableOpacity 
          onPress={this.enterSearch} 
          style={{padding: 3}}
          >
          <Ionicons
            name='ios-search'
            size={20}
            color="pink"
          />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  searchBar: {
      flexDirection: 'row',
      backgroundColor: Colors.cloud,
      width: (90/100) * Dimensions.get('window').width,
      height: 30,
      borderRadius: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 10,
      marginBottom: 20,
  }
});