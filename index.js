//index.ios.js - place code in here for ios

// Import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
const App = () => (
  //can only return ONE TOP LEVEL TAG
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render it to the device

AppRegistry.registerComponent('albums', () => App);
