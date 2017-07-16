import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Switch } from "react-native";
import defaultNavigationOptions from "GCCVendorMobile/styles/navigationOptions";
import firebase from "GCCVendorMobile/firebase";
import SpecService from "GCCVendorMobile/services/specService";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1
	},
	roomContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 11,
		paddingTop: 9,
		paddingBottom: 8,
		backgroundColor: "#EEEEEE",
		borderBottomWidth: 1,
		borderColor: "#DDDDDD"
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
	},

	roomNameText: {
		marginRight: 10,
		fontSize: 15,
		color: "#444444",
		fontFamily: "OpenSans-Semibold"
	},
	windowInput: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 7,
		backgroundColor: "#FFFFFF"
	},
	windowInputLabel: {
		flex: 0.44
	},
	windowInputLabelText: {
		fontSize: 14,
		color: "#999999",
		textAlign: "right",
		paddingRight: 20,
		fontFamily: "OpenSans"
	},
	windowInputValue: {
		flex: 0.56
	}
});

export default class WindowDetailsScreen extends Component {
	static navigationOptions = Object.assign(defaultNavigationOptions, {
		title: "Window Details"
	});

	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.listenForData();
	}
	listenForData() {
		this.jobRef = firebase.database().ref("specs").on("value", snap => {
			let specService = new SpecService(snap.val(), "44b41bce-b245-4328-a386-559b5d274ed4");
			let windowSpecs = specService.getWindowSpecs();
			this.setState({
				windowSpecs: windowSpecs
			});
		});
	}

	render() {
		if (!this.state.windowSpecs) {
			return null;
		}
		return (
			<View style={styles.container}>
				<View style={styles.roomContainer}>
					<View style={styles.badge}>
						<Image
							source={require("GCCVendorMobile/images/orange-circle.png")}
							style={{ width: 24, height: 24 }}
						/>
						<View style={styles.badgeContainer}>
							<Text style={styles.badgeText}>1</Text>
						</View>
					</View>
					<Text style={styles.roomNameText}>Room Name</Text>
				</View>
				{this.state.windowSpecs.map(spec => {
					return (
						<View style={styles.windowInput}>
							<View style={styles.windowInputLabel}>
								<Text style={styles.windowInputLabelText}>
									{spec.displayLabel}
								</Text>
							</View>
							<View style={styles.windowInputValue}>
								<Switch value={true} />
							</View>
						</View>
					);
				})}
			</View>
		);
	}
}
