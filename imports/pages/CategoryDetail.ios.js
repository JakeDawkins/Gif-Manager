import React, { Component } from 'react';
import { View, ListView, Button } from 'react-native';
import styled from "styled-components/native";

import Colors from "../util/colors";
import CategoryRow from "../components/CategoryRow";
import NewCategory from "./NewCategory.ios";
import { getCategoriesData } from "../util/categories";

const WrapperView = styled.View`
  flex: 1;
  margin-top: 64;
  background-color: ${Colors.dark};
`;

const ListOfCategories = styled.ListView`
  flex: 1;
  background-color: ${Colors.dark};
`;

export default class CategoryList extends Component {

  //used by ListOfCategories
  renderRow = (rowData) =>
    <CategoryRow
      title={rowData.title}
      thumbnailURI={rowData.thumbnailURI}
    />;

  navToNewCategory(){
    this.props.navigator.push({
        title: 'New Category',
        component: NewCategory
    })
  }

  render() {
    return (
      <WrapperView>
        <Button
          title="New Category"
          color={Colors.light}
          onPress={this.navToNewCategory.bind(this)}
        />
        <ListOfCategories
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </WrapperView>
    );
  }
}