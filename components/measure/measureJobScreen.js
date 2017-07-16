import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text, Image, ScrollView, TouchableHighlight } from "react-native";
import firebase from "GCCVendorMobile/firebase";

import CustomerDetails from "GCCVendorMobile/components/shared/customerDetails";
import MeasureRoom from "GCCVendorMobile/components/measure/measureRoom";
import JobSummary from "GCCVendorMobile/components/jobSummary";

const headerStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#111111"
  },
  headerTitleStyle: {
    color: "#FFFFFF"
  },
  headerBackTitleStyle: {
    color: "#FFFFFF",
    tintColor: "#FFFFFF"
  }
});
export default class MeasureJobScreen extends Component {
  static navigationOptions = {
    title: "Job 123123",
    headerStyle: headerStyles.headerStyle,
    headerTintColor: "#FFFFFF",
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerBackTitleStyle: headerStyles.headerBackTitleStyle
  };
  constructor(props) {
    super(props);
    this.state = {
      job: {}
    };
  }
  componentDidMount() {
    this.listenForData();
  }
  listenForData() {
    this.jobRef = firebase.database().ref("jobs/" + this.props.navigation.state.params.jobKey).on("value", snap => {
      this.setState({
        job: snap.val()
      });
    });
  }

  renderRooms() {
    if (!this.state.job.rooms) {
      return null;
    }
    let rooms = this.state.job.rooms.map((room, index) => {
      return (
        <MeasureRoom index="1" jobId={this.state.job._key} room={room} key={index} navigation={this.props.navigation} />
      );
    });
    return rooms;
  }
  renderWindows() {}
  render() {
    return (
      <View style={styles.screenContainer}>
        <ScrollView>
          <CustomerDetails customer={this.state.job.customer} serviceAddress={this.state.job.serviceAddress} />
          <JobSummary />
          {this.renderRooms()}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },

  editIcon: {
    justifyContent: "center"
  }
});
