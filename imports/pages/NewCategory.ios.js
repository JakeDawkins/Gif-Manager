import React, { Component } from 'react';
import { View, ListView, Button, Text, TextInput } from 'react-native';
import styled from "styled-components/native";

import { getCategoriesData, addCategory } from "../util/categories";

const WrapperView = styled.View`
  flex: 1;
  margin-top: 64;
  padding: 16
  background-color: #222222;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
  text-align: center;
  font-size: 32;
  height: 32;
  color: white;
  border-color: white;
  margin-bottom: 16;
`;

export default class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.addCategoryPressed = this.addCategoryPressed.bind(this);
  }

  addCategoryPressed() {
    if(!this.state || this.state.text == "" || !this.props.navigator) return;
    addCategory({
      title: this.state.text,
      thumbnailURI: "http://placehold.it/100x100",
    });

    this.props.navigator.pop();
    // console.warn(this.state.text);
  }

  render(){
    return (
      <WrapperView>
        <Input
          placeholder="New Category Name"
          placeholderTextColor="#999999"
          onChangeText={(text) => this.setState({"text": text})}
          value={this.state.text}
          autoFocus={true}
        />
        <Button
          title="Submit"
          color="#B23AEE"
          onPress={this.addCategoryPressed}
        />
      </WrapperView>
    );
  }
}