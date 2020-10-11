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
				headerStyle:{
					backgroundColor:"orange",
				},
				headerTintColor:"white",
	
			};
		},
	},
	Recipe: {
		screen: Recipe,
		navigationOptions:({navigation})=>{
			return {
				title:navigation.state.params.title || "Recipe",
				headerStyle:{
					backgroundColor:"green",
					opacity:0.8
				},
				headerTintColor:"white",

			}
		}
	},
};
const Stack = createStackNavigator(Screens);
export default Stack;
