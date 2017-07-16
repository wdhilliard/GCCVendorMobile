import React, { PureComponent } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import MeasureWindow from "GCCVendorMobile/components/measure/measureWindow";

export default class MeasureRoom extends PureComponent {
	constructor(props) {
		super(props);
	}
	renderWindows() {
		if (!this.props.room.windows) {
			return null;
		}
		let windows = this.props.room.windows.map(window => {
			return <MeasureWindow window={window} navigation={this.props.navigation} />;
		});
		return windows;
	}
	render() {
		return (
			<View>
				<View style={styles.roomContainer}>
					<View style={styles.badge}>
						<Image
							source={require("GCCVendorMobile/images/orange-circle.png")}
							style={{ width: 24, height: 24 }}
						/>
						<View style={styles.badgeContainer}>
							<Text style={styles.badgeText}>{this.props.room.label}</Text>
						</View>
					</View>
					<Text style={styles.roomNameText}>{this.props.room.name}</Text>
					<Image
						source={require("GCCVendorMobile/images/edit-pencil.png")}
						style={{ width: 12, height: 12 }}
					/>
				</View>
				{this.renderWindows()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
	}
});
