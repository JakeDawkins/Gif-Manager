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
    backgroundColor: '#F0F0F0',
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 0,
    borderRadius: 5,
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