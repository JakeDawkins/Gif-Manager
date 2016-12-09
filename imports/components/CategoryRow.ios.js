import React from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import styled from "styled-components/native";

import Colors from "../util/colors";

const RowContainer = styled.View`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  height: 100;
  background-color: ${Colors.dark};
  margin-horizontal: 5;
  margin-top: 5;
  margin-bottom: 0;
  border-radius: 0;
`;

const Thumbnail = styled.Image`
  flex: 1;
  height: 100;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 36;
  font-weight: bold;
  margin: 30;
  background-color: purple;
  color: white;
  text-align: center;
  padding: 5;
`;

export default class CategoryRow extends React.Component {
  // = ({thumbnailURI, title, onPress}) =>

  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  };

  render() {
    return (
      <RowContainer>
        <TouchableHighlight onPress={this.props.onPress} style={styles.highlight}>
          <Image
            source={{ uri: "https://media.giphy.com/media/3o7TKQXXnn5fwgfHr2/source.gif" }}
            ref={component => this._root = component}
            style={styles.highlight}
          >
            {
              this.props.title
              ? <Title numberOfLines={1}>{this.props.title}</Title>
              : null
            }
          </Image>
        </TouchableHighlight>
      </RowContainer>
    );
  }
}

const styles = StyleSheet.create({
  highlight: {
    flex: 1,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
  }
});