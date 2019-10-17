/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, Dimensions } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  //you can change the props above to whatever you want/need.

  render () {
    const {articles} = this.props;

    return (
      <View
      style={styles.item} >
      <TouchableOpacity 
        onPress={() => Linking.openURL(item.url)} >
        <Text 
          style={{
            marginBottom: 5,
            fontSize: 22,
            fontWeight: 'bold',
          }} >
        {item.title}
        </Text>
      </TouchableOpacity>
      <Text 
        style={{
          marginBottom: 3,
          fontSize: 14,
          letterSpacing: 0.1
        }} >
        {item.snippet}
      </Text>
      <Text 
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 3,
          marginTop: 3,
        }} >
        {item.byline}
      </Text>
      <Text 
        style={{
          fontSize: 10,
          marginTop: 3,
        }} >
        {item.date}
      </Text>
      
    </View>
    );
  }
}


const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    width: (9/10) * Dimensions.get('window').width,
    marginVertical: 10,
    alignItems: 'flex-start',
  },
});
