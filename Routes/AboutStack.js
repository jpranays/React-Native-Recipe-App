import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import About from "../Screens/About";
import Header from "../Shared/Header";

const Screens = {
	About: {
		screen: About,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => <Header title="About" navigation={navigation} />,
			};
		},
	},
};
const AboutStack = createStackNavigator(Screens);
export default AboutStack;
