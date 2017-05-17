import React, { Component } from 'react';
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
  Navigator
} from 'react-native';
import JobScreen from 'GCCVendorMobile/components/jobScreen';
import JobListScreen from 'GCCVendorMobile/components/jobListScreen';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Main: { screen: JobListScreen },
  Job: { screen: JobScreen }
});

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class GCCVendorMobile extends Component {
  render() {
    return <App headerStyle={styles.headerStyle} headerTintColor="'#FFFFFF'" />;
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#AABBFF'
  }
});

AppRegistry.registerComponent('GCCVendorMobile', () => GCCVendorMobile);
