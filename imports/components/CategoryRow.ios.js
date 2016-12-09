import React from 'react';
import { Text, View, Image } from 'react-native';
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
  padding-left: 5;
  padding-right: 5;
`;

export default CategoryRow = ({thumbnailURI, title}) =>
  <RowContainer>
    <Thumbnail source={{ uri: "https://media.giphy.com/media/3o7TKQXXnn5fwgfHr2/source.gif" }} >
      { title ? <Title numberOfLines={1}>{title}</Title> : null }
    </Thumbnail>
  </RowContainer>

