import React, { Component } from 'react';
import { View, ListView, Button } from 'react-native';
import styled from "styled-components/native";

import Colors from "../util/colors";
import CategoryRow from "../components/CategoryRow";
import NewCategory from "./NewCategory.ios";
import CategoryDetail from "./CategoryDetail.ios";
import { getCategoriesData } from "../util/categories";

import { addImage, getImagesWithCategory, getAllImages } from "../util/images";

const WrapperView = styled.View`
  flex: 1;
  background-color: ${Colors.dark};
`;

const ListOfCategories = styled.ListView`
  flex: 1;
  background-color: ${Colors.dark};
`;

export default class CategoryList extends Component {

  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  //need to set up a blank initial datasource so the listview won't error out
  constructor(props){
    super(props);

    this.state = {
      dataSource: this.ds.cloneWithRows([]),
    };
  }

  //fetch the data that will be loaded into the ListView
  componentWillMount(){
    getCategoriesData().then(
      res => {
        this.setState({ dataSource: this.ds.cloneWithRows(res) });
      }
    );
  }

  componentWillUpdate(){
    getCategoriesData().then(
      res => {
        this.setState({ dataSource: this.ds.cloneWithRows(res) });
      }
    );
  }

  //used by ListOfCategories
  renderRow = (rowData) =>
    <CategoryRow
      title={rowData.title}
      thumbnailURI={rowData.thumbnailURI}
      onPress={() => this.navToCategoryDetail(rowData._id, rowData.title)}
    />;

  navToNewCategory(){
    this.props.navigator.push({
      title: 'New Category',
      component: NewCategory,
    })
  }

  navToCategoryDetail(categoryId, category){
    this.props.navigator.push({
      title: category,
      component: CategoryDetail,
      passProps: {categoryId: categoryId},
    })
  }

  render() {
    return (
      <WrapperView>
        <ListOfCategories
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </WrapperView>
    );
  }
}