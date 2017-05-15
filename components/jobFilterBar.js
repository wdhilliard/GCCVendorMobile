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

export default class GCCVendorMobile extends Component {
  render() {
    return (
        <View style={styles.filterBar}>
          <View style={styles.sortFilter}>
            <View style={styles.sortFilterBox}>
              <Text style={styles.sortFilterText}>Sort By Date</Text>
            </View>
            <View style={styles.sortFilterBox}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/down-arrow.png')} 
                style={{width:11,height:6}}
              />
            </View>
          </View>
          <View style={styles.sortFilter}>
            <View style={styles.sortFilterBox}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/sort-down.png')} 
                style={{width:13,height:22}}
              />
            </View>
          </View>
          <View style={styles.sortFilter}>
            <View style={styles.sortFilterBox}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/star-outline.png')} 
                style={{width:24,height:24}}
              />
            </View>
          </View>
        </View>

    );
  }
}


const styles = StyleSheet.create({
  filterBar: {
    flexDirection: 'row',
    height: 45,
    borderBottomWidth:1,
    borderColor: '#DDDDDD',
  },
  sortFilter:{
    flexDirection: 'row',
    flexGrow:0,
    borderRightWidth:1,
    borderColor: '#DDDDDD',
    padding:11
  },
  sortFilterBox:{
    flexDirection:'column',
    justifyContent: 'center'
  },
  sortFilterText:{
    fontSize: 14,
    fontFamily: 'OpenSans-Light',
    paddingRight: 11
  },
});
