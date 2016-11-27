import React from 'react';
import { Text, View, Image } from 'react-native';
import styled from "styled-components/native";

import Colors from "../util/colors";

const RowContainer = styled.View`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  height: 100;
  background-color: ${Colors.light};
  margin-horizontal: 5;
  margin-top: 5;
  margin-bottom: 0;
  border-radius: 0;
`;

const Thumbnail = styled.Image`
  height: 100;
  width: 100;
`;

const Title = styled.Text`
  font-size: 36;
  font-weight: bold;
  margin: 10;
`;

export default CategoryRow = ({thumbnailURI, title}) =>
  <RowContainer>
    <Thumbnail source={{ uri: thumbnailURI }} />
    <Title numberOfLines={1}>
      {title}
    </Title>
  </RowContainer>
