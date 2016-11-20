import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
} from 'react-native';

import data from "./imports/data";
import CategoryRow from "./imports/components/CategoryRow.ios";

export default class gif extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <CategoryRow
            title={rowData.title}
            thumbnailURI={rowData.thumbnailURI}
          />
        }
      >
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#333333',
  },
});

AppRegistry.registerComponent('gif', () => gif);

// justifyContent: 'center',
//     alignItems: 'center',

