import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ScrollView,
  Text,
  Image
} from 'react-native';
import JobsScreen from 'GccVendorMobile/components/jobsScreen';




import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAPnYIAeeG8DPhio_WIGp4KwrPchDOUJyA",
  authDomain: "gccvendormobile.firebaseapp.com",
  databaseURL: "https://gccvendormobile.firebaseio.com",
  projectId: "gccvendormobile",
  storageBucket: "gccvendormobile.appspot.com",
  messagingSenderId: "117606118959"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);



const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);


export default class GccVendorMobile extends Component {
  render() {
    return (
      <JobsScreen/>
    );
  }
}





AppRegistry.registerComponent('GccVendorMobile', () => GccVendorMobile);
