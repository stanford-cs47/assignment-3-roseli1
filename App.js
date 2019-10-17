/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity, FlatList, Linking, ActivityIndicator } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'
import { material } from 'react-native-typography'
import { Ionicons } from '@expo/vector-icons';

//import News from './App/Components/News'
import Search from './App/Components/Search'

export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  componentDidMount() {
    //uncomment this to run an API query!
    this.loadArticles();
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  goSearch = (searchText) => {
    this.loadArticles(searchText, '');
  }

  renderItem = (index, item) => (
    <View style={styles.item} >
      <TouchableOpacity onPress={() => Linking.openURL(item.url)} >
        <Text style={material.title}>{item.title}</Text>
      </TouchableOpacity>
      <Text style={material.body1}>{item.snippet}</Text>
      <Text 
        style={material.body2}>{item.byline}</Text>
      <Text 
        style={material.caption}>{item.date}</Text>
    </View>
  )

  keyExtractor = index => {
    return index.toString();
  }

  render() {
    const {articles, loading} = this.state;

    let contentDisplayed = null;

    if (loading) {
      contentDisplayed = <ActivityIndicator style={{margin: (3/10) * Dimensions.get('window').height}} size="large" color="pink" />
    } else {
      contentDisplayed = 
        <FlatList
          data={this.state.articles}
          renderItem={({ index, item }) => this.renderItem(index, item)}
          keyExtractor={(item, index) => this.keyExtractor(index)}
        />
    }

    return (
      <SafeAreaView style={styles.container}>
        <View >
          <Image
            style={styles.title}
            source={Images.logo}
          />

          <Search 
            searchText={this.state.searchText}
            goSearch={this.goSearch}
          />
        </View>

        {contentDisplayed}

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    width: (9/10) * Dimensions.get('window').width,
    height: (2/10) * Dimensions.get('window').width,
    marginVertical: 15,
    resizeMode: 'contain',
  },
  item: {
    flexDirection: 'column',
    width: (9/10) * Dimensions.get('window').width,
    marginVertical: 10,
    alignItems: 'flex-start',
  },
});
