import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../Screens/Home";
import Recipe from "../Screens/Recipe";
import Header from "../Shared/Header";
const Screens = {
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => <Header title="Home" navigation={navigation} />,
			};
		},
	},
	Recipe: {
		screen: Recipe,
		navigationOptions:({navigation})=>{
			return {
				title:navigation.state.params.title || "Recipe"
			}
		}
	},
};
const Stack = createStackNavigator(Screens);
export default Stack;
