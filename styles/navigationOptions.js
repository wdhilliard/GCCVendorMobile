import { StyleSheet } from "react-native";

const headerStyle = StyleSheet.create({
	headerStyle: {
		backgroundColor: "#111111"
	},
	headerTitleStyle: {
		color: "#FFFFFF"
	},
	headerBackTitleStyle: {
		color: "#FFFFFF"
	},
	headerTintColor: {
		tintColor: "#FFFFFF"
	}
});

export default (defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: "#111111"
	},
	headerTitleStyle: {
		color: "#FFFFFF"
	},
	headerBackTitleStyle: {
		color: "#FFFFFF"
	},
	headerTintColor: "#FFFFFF"
});
