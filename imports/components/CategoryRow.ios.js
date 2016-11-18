/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class CategoryRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: this.props.thumbnailURI,
          }}
          style={styles.img}
        />
        <Text numberOfLines={1} style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    backgroundColor: '#F5FCFF',
  },
  img: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    margin: 10,
  },
});

//thumbnailURI
//title
// justifyContent: 'center', // primary axis ( col )