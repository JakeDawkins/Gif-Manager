import React, { Component } from 'react';
import { View, ListView, Button, NavigatorIOS } from 'react-native';
import styled from "styled-components/native";

import CategoryRow from "../components/CategoryRow";
import NewCategory from "./NewCategory.ios";
import { getCategoriesData } from "../util/categories";

const WrapperView = styled.View`
  flex: 1;
  margin-top: 64;
  background-color: #222222;
`;

const ListOfCategories = styled.ListView`
  flex: 1;
  background-color: #222222;
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
          color="#ffffff"
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