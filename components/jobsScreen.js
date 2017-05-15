import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ScrollView,
  Text,
  Image,
  ListView,
  Picker
} from 'react-native';

import firebase from 'GCCVendorMobile/firebase';
import JobListItem from 'GCCVendorMobile/components/jobListItem'
import JobFilterBar from 'GCCVendorMobile/components/jobFilterBar';
import MenuBar from 'GCCVendorMobile/components/menuBar';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);




export default class JobsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      pickerValue: "java"
    };
    this.itemsRef = firebase.database().ref('jobs');
  }


  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        let val = child.val();
        items.push({
          jobNumber: val.po,
          serviceAddress: val.serviceAddress,
          customer: val.customer,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  _renderItem(item){
    return(
      <JobListItem job={item}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#000000" barStyle="light-content" />
        <JobFilterBar/>
        <ScrollView style={styles.jobList}>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>
        </ScrollView>
        <Picker
          selectedValue={this.state.pickerValue}
          onValueChange={(text) => this.setState({ pickerValue: text })}
        >
          <Picker.Item label="Java" value="'java'" key="0"/>
          <Picker.Item label="JavaScript" value="'js'" key="1"/>
        </Picker>
        <MenuBar/>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow:1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  listView:{

  },


  jobList: {
    flexGrow:1,
    backgroundColor: '#EEEEEE',
  },


 

});

