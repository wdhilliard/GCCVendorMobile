import React, { PureComponent } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ScrollView,
  Text,
  Image
} from "react-native";

export default class CustomerDetails extends PureComponent {
  constructor(props) {
    super(props);
  }
  getAddressLine(addressLine) {
    if (addressLine) {
      return <Text style={styles.addressLine}>{addressLine}</Text>;
    }
  }
  renderCityStateZip() {
    let text =
      this.props.serviceAddress.city +
      ", " +
      this.props.serviceAddress.state +
      " " +
      this.props.serviceAddress.zipCode;
    return <Text style={styles.addressLine}>{text}</Text>;
  }
  render() {
    if (this.props.customer && this.props.serviceAddress) {
      return (
        <View style={styles.customerDetailsContainer}>
          <View>
            <Text style={styles.customerName}>
              {this.props.customer.firstName} {this.props.customer.lastName}
            </Text>
            {this.getAddressLine(this.props.serviceAddress.line1)}
            {this.getAddressLine(this.props.serviceAddress.line2)}
            {this.renderCityStateZip()}
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  customerDetailsContainer: {
    backgroundColor: "#FFFFFF",
    padding: 11,
    borderBottomWidth: 1,
    borderColor: "#DDDDDD"
  },
  customerName: {
    color: "#444444",
    fontSize: 15,
    fontFamily: "OpenSans-Semibold"
  },
  addressLine: {
    color: "#444444",
    fontSize: 14,
    fontFamily: "OpenSans-Light"
  }
});
