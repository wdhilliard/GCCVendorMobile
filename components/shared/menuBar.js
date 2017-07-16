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

export default class MenuBar extends Component {
  render() {
    return (
      <View style={styles.menuBar}>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <View style={{ justifyContent: 'center' }}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/hammer.png')}
                style={{ width: 22, height: 20 }}
              />
            </View>
          </View>
          <Text style={styles.menuItemText}>Jobs</Text>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <View style={{ justifyContent: 'center' }}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/info.png')}
                style={{ width: 22, height: 22 }}
              />
            </View>
          </View>
          <Text style={styles.menuItemText}>CEC Help</Text>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <View style={{ justifyContent: 'center' }}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/mobile.png')}
                style={{ width: 14, height: 22 }}
              />
            </View>
          </View>
          <Text style={styles.menuItemText}>App Help</Text>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <View style={{ justifyContent: 'center' }}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/desktop.png')}
                style={{ width: 25, height: 18 }}
              />
            </View>
          </View>
          <Text style={styles.menuItemText}>Admin</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: '#111111',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center'
  },
  menuItem: {
    width: 75,
    alignContent: 'center'
  },
  menuIcon: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  menuItemText: {
    color: '#EEEEEE',
    fontSize: 11,
    alignSelf: 'stretch',
    textAlign: 'center'
  }
});
