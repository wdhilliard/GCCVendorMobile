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
  headerStyle:{
    backgroundColor:'#111111',
  },
  headerTitleStyle:{
    color:'#FFFFFF',
  },
  headerTintColor:{
    tintColor:'#FFFFFF'

  },
  jobList: {
    flexGrow:1,
    backgroundColor: '#EEEEEE',
  },
});

export default class JobsScreen extends Component {
  static navigationOptions = {
    title: 'Jobs',
    headerStyle: styles.headerStyle,
    headerBackTitle:'fuck',
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitleStyle: styles.headerBackTitleStyle
  }
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
      <JobListItem job={item} navigation={this.props.navigation}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <JobFilterBar/>
        <ScrollView style={styles.jobList}>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}
          />
        </ScrollView>
        <MenuBar/>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;



