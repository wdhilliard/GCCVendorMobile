import React, { Component } from "react";
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
} from "react-native";
import MeasureJobScreen from "GCCVendorMobile/components/measure/measureJobScreen";
import JobsScreen from "GCCVendorMobile/components/jobs/jobsScreen";
import WindowDetailsScreen from "GCCVendorMobile/components/window/windowDetailsScreen";
import { StackNavigator } from "react-navigation";

console.disableYellowBox = true;

const App = StackNavigator({
  Main: { screen: JobsScreen },
  Job: { screen: MeasureJobScreen },
  WindowDetails: { screen: WindowDetailsScreen }
});

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : 0;
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
    backgroundColor: "#AABBFF"
  }
});

AppRegistry.registerComponent("GCCVendorMobile", () => GCCVendorMobile);
