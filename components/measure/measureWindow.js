import React, { PureComponent } from "react";
import { View, Image, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from "react-native";
import firebase from "GCCVendorMobile/firebase";
export default class MeasureWindow extends PureComponent {
  constructor(props) {
    super(props);
  }
  formatDimension(whole, part) {
    let dimension = whole ? whole : "";
    dimension = part ? dimension + " " + part : dimension;
    if (dimension) {
      dimension = dimension + '"';
    }
    return dimension;
  }
  goToWindowDetails() {
    this.props.navigation.navigate("WindowDetails");
  }

  render() {
    return (
      <TouchableHighlight onPress={e => this.goToWindowDetails(e)}>
        <View style={styles.windowContainer}>
          <View style={styles.badge}>
            <Image source={require("GCCVendorMobile/images/orange-circle.png")} style={{ width: 24, height: 24 }} />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
          <View style={styles.windowDetails}>
            <View style={styles.dimensions}>
              <View style={styles.dimensionContainer}>
                <Text style={styles.dimensionLabel}>W</Text>
                <Text style={styles.dimensionValue}>
                  {this.formatDimension(this.props.window.width, this.props.window.widthFraction)}
                </Text>
              </View>
              <View style={styles.dimensionContainer}>
                <Text style={styles.dimensionLabel}>H</Text>
                <Text style={styles.dimensionValue}>
                  {this.formatDimension(this.props.window.height, this.props.window.heightFraction)}
                </Text>
              </View>
              <View style={styles.dimensionContainer}>
                <Text style={styles.dimensionLabel}>D</Text>
                <Text style={styles.dimensionValue}>
                  {this.formatDimension(this.props.window.depth, this.props.window.depthFraction)}
                </Text>
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
                <Image source={require("GCCVendorMobile/images/camera.png")} style={{ width: 14, height: 13 }} />
              </View>
              <View style={styles.optionBox}>
                <Image source={require("GCCVendorMobile/images/clone-window.png")} style={{ width: 14, height: 14 }} />
              </View>
              <TouchableOpacity style={styles.optionBox}>
                <Image source={require("GCCVendorMobile/images/trash-window.png")} style={{ width: 9, height: 13 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.arrowButton}>
            <Image
              resizeMode="contain"
              source={require("GCCVendorMobile/images/right-arrow.png")}
              style={{ width: 9, height: 14 }}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  windowContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 9,
    backgroundColor: "#FFFFFF"
  },
  windowDetails: {
    flexGrow: 1
  },
  dimensions: {
    flexDirection: "row",
    alignItems: "center"
  },
  dimensionContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginRight: 10,
    borderColor: "#CCCCCC",
    borderBottomWidth: 1
  },
  dimensionLabel: {
    marginRight: 5,
    fontSize: 14,
    lineHeight: 24,
    color: "#999999"
  },
  dimensionValue: {
    fontSize: 15,
    lineHeight: 24,
    color: "#444444",
    fontFamily: "OpenSans-Semibold"
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1
  },
  optionBox: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center"
  },
  arrowButton: {
    justifyContent: "center"
  },

  badge: {
    marginRight: 11,
    width: 24,
    height: 24
  },
  badgeContainer: {
    position: "absolute",
    width: 24,
    height: 24,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  badgeText: {
    justifyContent: "center",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "OpenSans-Semibold"
  }
});
