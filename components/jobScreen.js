import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import CustomerDetails from 'GCCVendorMobile/components/customerDetails';
import JobSummary from 'GCCVendorMobile/components/jobSummary';

export default class JobScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Fuck'
    };
  }
  render() {
    return (
      <View>
        <CustomerDetails />
        <JobSummary />
        <View style={styles.roomContainer}>
          <View style={styles.badge}>
            <Image
              source={require('GCCVendorMobile/images/orange-circle.png')}
              style={{ width: 24, height: 24 }}
            />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
          <Text style={styles.roomNameText}>Room Name</Text>
          <Image
            source={require('GCCVendorMobile/images/edit-pencil.png')}
            style={{ width: 12, height: 12 }}
          />
        </View>
        <View style={styles.windowContainer}>
          <View style={styles.badge}>
            <Image
              source={require('GCCVendorMobile/images/orange-circle.png')}
              style={{ width: 24, height: 24 }}
            />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
          <View style={styles.windowDetails}>
            <View style={styles.dimensions}>
              <View style={styles.dimensionContainer}>
                <Text style={styles.dimensionLabel}>W</Text>
                <Text style={styles.dimensionValue}>49 5/8"</Text>
              </View>
              <View style={styles.dimensionContainer}>
                <Text style={styles.dimensionLabel}>H</Text>
                <Text style={styles.dimensionValue}>49 5/8"</Text>
              </View>
              <View style={styles.dimensionContainer}>
                <Text style={styles.dimensionLabel}>D</Text>
                <Text style={styles.dimensionValue}>49 5/8"</Text>
              </View>
            </View>
            <View style={styles.options}>
              <View style={styles.optionBox}>
                <Text>I</Text>
              </View>
              <View style={styles.optionBox}>
                <Text>B</Text>
              </View>
              <View style={styles.optionBox}>
                <Image
                  source={require('GCCVendorMobile/images/camera.png')}
                  style={{ width: 14, height: 13 }}
                />
              </View>
              <View style={styles.optionBox}>
                <Image
                  source={require('GCCVendorMobile/images/clone-window.png')}
                  style={{ width: 14, height: 14 }}
                />
              </View>
              <View style={styles.optionBox}>
                <Image
                  source={require('GCCVendorMobile/images/trash-window.png')}
                  style={{ width: 9, height: 13 }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  windowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 11,
    paddingTop: 9,
    backgroundColor: '#FFFFFF'
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1
  },
  optionBox: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dimensions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dimensionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    borderColor: '#CCCCCC',
    borderBottomWidth: 1
  },
  dimensionLabel: {
    marginRight: 5,
    fontSize: 14,
    lineHeight: 24,
    color: '#999999'
  },
  dimensionValue: {
    fontSize: 15,
    lineHeight: 24,
    color: '#444444',
    fontFamily: 'OpenSans-Semibold'
  },

  roomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 11,
    paddingTop: 9,
    paddingBottom: 8,
    backgroundColor: '#EEEEEE',
    borderBottomWidth: 1,
    borderColor: '#DDDDDD'
  },
  badge: {
    marginRight: 11,
    width: 24,
    height: 24
  },
  badgeContainer: {
    position: 'absolute',
    width: 24,
    height: 24,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  badgeText: {
    justifyContent: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'OpenSans-Semibold'
  },

  roomNameText: {
    marginRight: 10,
    fontSize: 15,
    color: '#444444',
    fontFamily: 'OpenSans-Semibold'
  },
  editIcon: {
    justifyContent: 'center'
  }
});
