import React, { Component } from 'react';
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

export default class CustomerDetails extends Component {
  render() {
    return (
      <View style={styles.customerDetailsContainer}>
        <View>
          <Text style={styles.customerName}>Joe Smith</Text>
          <Text style={styles.addressLine}>1234 Oak</Text>
          <Text style={styles.addressLine}>Apt 200</Text>
          <Text style={styles.addressLine}>Bostom, MA 20301</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customerDetailsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 11,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD'
  },
  customerName: {
    color: '#444444',
    fontSize: 15,
    fontFamily: 'OpenSans-Semibold'
  },
  addressLine: {
    color: '#444444',
    fontSize: 14,
    fontFamily: 'OpenSans-Light'
  }
});
