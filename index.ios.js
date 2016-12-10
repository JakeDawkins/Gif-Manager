import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet } from 'react-native';
import styled from "styled-components/native";
import NewCategory from "./imports/pages/NewCategory.ios";

import CategoryList from "./imports/pages/CategoryList.ios";
// import NewCategory from "./imports/pages/NewCategory.ios";

import { getCategoriesData, updateCategories } from "./imports/util/categories";

const StyledNavigator = styled.NavigatorIOS`
  flex: 1;
`;

export default class gif extends Component {
  constructor() {
    super();
    this. _handleNavigationRequest = this. _handleNavigationRequest.bind(this);
  }

  _handleNavigationRequest() {
    console.log(this._nav);
    this._nav.push({
      component: NewCategory,
      title: 'New Category',
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref={(ref) => {this._nav = ref}}
        style={styles.nav}
        initialRoute={{
          title: 'Categories',
          component: CategoryList,
          rightButtonTitle: "Add",
          onRightButtonPress: () => this._handleNavigationRequest(),
        }}
      />
    );
  }
}

AppRegistry.registerComponent('gif', () => gif);

const styles = StyleSheet.create({
  nav: {
    flex: 1,
  }
});