import React from "react";
import { View, Text,ImageBackground } from "react-native";
import GlobalStyles from "../Shared/globalStyles"
function About() {
	return (
		<View
		style={GlobalStyles.About}
	>        
	        <ImageBackground source={require("../assets/background-image-about.jpg")} style={GlobalStyles.AboutBackground} />
			<Text
			style={GlobalStyles.AboutText}
			>Developer : https://github.com/jpranays</Text>
<Text
			style={GlobalStyles.AboutText}
			>API :  Edamam B2B API</Text>
		<Text
			style={GlobalStyles.AboutText}
			>Image Sources :  By Дарья Яковлева from Pixabay,pencil parker from Pixabay  </Text>
		<Text
			style={GlobalStyles.AboutText}
			>Version : 1.0.0 </Text>
	
		</View>

	);
}

export default About;
