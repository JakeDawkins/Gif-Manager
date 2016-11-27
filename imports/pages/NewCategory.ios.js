import React, { Component } from 'react';
import { View, ListView, Button, Text } from 'react-native';
import styled from "styled-components/native";

import { getCategoriesData, updateCategories } from "../util/categories";

const WrapperView = styled.View`
  flex: 1;
  margin-top: 64;
  background-color: #222222;
`;

export default NewCategory = (props) =>
  <WrapperView>
    <Button
      title="Back"
      color="#ffffff"
      onPress={props.navigator.pop}
    />
  </WrapperView>