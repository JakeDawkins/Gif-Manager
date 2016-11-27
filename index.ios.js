import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';
import styled from "styled-components/native";

import CategoryList from "./imports/pages/CategoryList.ios";
import { getCategoriesData, updateCategories } from "./imports/util/categories";

const StyledNavigator = styled.NavigatorIOS`
  flex: 1;
`;

export default gif = (props) =>
  <StyledNavigator
    initialRoute={{
      title: 'Categories',
      component: CategoryList
    }}
  />

AppRegistry.registerComponent('gif', () => gif);
