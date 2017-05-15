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
  ListView
} from 'react-native';
import JobsScreen from 'GCCVendorMobile/components/jobsScreen';


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);



export default class GCCVendorMobile extends Component {
  render() {
    return (
      <JobsScreen/>
    );
  }
}





AppRegistry.registerComponent('GCCVendorMobile', () => GCCVendorMobile);
