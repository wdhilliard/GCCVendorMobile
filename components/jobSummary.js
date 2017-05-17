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

export default class JobSummary extends Component {
  render() {
    return (
      <View style={styles.jobSummaryContainer}>
        <View style={styles.jobType}>
          <Text style={styles.jobTypeText}>MEASURE</Text>
        </View>
        <View style={{ flexGrow: 1 }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.jobDetailBox}>
            <View style={{ justifyContent: 'center', marginRight: 5 }}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/window.png')}
                style={{ width: 12, height: 12 }}
              />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.jobDetailText}>1/1</Text>
            </View>
          </View>
          <View style={styles.jobDetailBox}>
            <View style={{ justifyContent: 'center', marginRight: 5 }}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/ladder.png')}
                style={{ width: 8, height: 12 }}
              />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.jobDetailText}>Yes</Text>
            </View>
          </View>
          <View style={styles.jobDetailBox}>
            <View style={{ justifyContent: 'center', marginRight: 5 }}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/arch.png')}
                style={{ width: 14, height: 11 }}
              />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.jobDetailText}>No</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  jobSummaryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 11
  },
  jobType: {
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#4F08CA',
    backgroundColor: '#4F08CA'
  },
  jobTypeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
    paddingHorizontal: 3
  },
  jobDetailBox: {
    flexDirection: 'row',
    marginLeft: 20
  },
  jobDetailText: {
    fontSize: 16,
    color: '#111111'
  }
});
