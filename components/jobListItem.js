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

export default class JobListItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <View style={styles.job}>
            
            <View style={styles.jobStar}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/star-outline.png')} 
                style={{width:24,height:24}}
              />
            </View>


            <View style={styles.jobDetails}>
              <View style={styles.jobInfo}>
                <View style={styles.jobType}>
                  <Text style={styles.jobTypeText}>M</Text>
                </View>
                <View style={styles.jobNumber}>
                  <Text style={styles.jobNumberText}>{this.props.job.jobNumber}</Text>
                </View>
                <View style={styles.jobDate}>
                  <Text style={styles.jobDateText}>Mar 4, 8 am - 12 pm</Text>
                </View>
              </View>

              <View style={styles.jobAddress}>
                <Text style={styles.jobCustomerName}>{this.props.job.customer.firstName} {this.props.job.customer.lastName}</Text>
                <Text style={styles.jobAddressLine}>{this.props.job.serviceAddress.line1}</Text>
                <Text style={styles.jobAddressLine}>{this.props.job.serviceAddress.line2}</Text>
                <Text style={styles.jobAddressLine}>{this.props.job.serviceAddress.city+', '+this.props.job.serviceAddress.city+' '+this.props.job.serviceAddress.state}</Text>
              </View>

            </View>

            <View style={styles.jobArrowButton}>
              <Image
                resizeMode="contain"
                source={require('GCCVendorMobile/images/right-arrow.png')} 
                style={{width:9,height:14}}
              />
            </View>

        </View>
    );
  }
}



const styles = StyleSheet.create({
   job:{
    backgroundColor: '#FFFFFF',
    borderBottomWidth:1,
    borderColor: '#EEEEEE',
    flexDirection:'row',
    flexGrow:1

  },
  jobStar:{
    justifyContent:'center',
    width:45,
    padding: 11

  },
  jobDetails:{
    marginTop:11,
    flexGrow:1
  },
  jobInfo:{
    flexDirection:'row'
  },
  jobType:{
    borderTopLeftRadius:2,
    borderBottomLeftRadius:2,
    borderWidth:4,
    borderTopWidth:0,
    borderBottomWidth:0,
    borderColor:'#4F08CA',
    backgroundColor:'#4F08CA'
  },
  jobTypeText:{
    color:'#FFFFFF',
    fontSize: 14,
    fontFamily:'OpenSans-Semibold'
  },
  jobNumber:{
    backgroundColor:'#EEEEEE',

  },
  jobNumberText:{
    paddingHorizontal:4,
    color:'#444444',
    fontSize: 14,
    fontFamily:'OpenSans-Semibold'
  },
  jobDate:{

  },
  jobDateText:{
    paddingHorizontal:5,
    color:'#444444',
    fontSize: 14,
    fontFamily:'OpenSans-Semibold'
  },

  jobAddress:{
    marginVertical:10,
    flexGrow:20
  },
  jobCustomerName:{
    color:'#444444',
    fontSize:15,
    fontFamily:'OpenSans-Semibold'
  },
  jobAddressLine:{
    color:'#444444',
    fontSize:14,
    fontFamily:'OpenSans-Light'
  },
  jobArrowButton:{
    justifyContent:'center',
    width:20
  }
})