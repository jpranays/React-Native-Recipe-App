import React from "react";
import { View, Text,ImageBackground } from "react-native";
function About() {
	return (
		<View
		style={{
			height:"100%",
			backgroundColor:"wheat"
		}}
	>        
	        <ImageBackground source={require("../assets/background-image-about.jpg")} style={{width:"100%",height:"100%",position:"absolute"}} />
			<Text
			style={{
				padding:20,
                color:"white",
				fontSize:20,
			}}
			>Developer : https://github.com/jpranays</Text>
<Text
			style={{
				padding:20,
                color:"white",
				fontSize:20,
			}}
			>API :  Edamam B2B API</Text>
		<Text
			style={{
				padding:20,
                color:"white",
				fontSize:20,
			}}
			>Image Sources :  By Дарья Яковлева from Pixabay,pencil parker from Pixabay  </Text>
		<Text
			style={{
				padding:20,
                color:"white",
				fontSize:20,
			}}
			>Version : 1.0.0 </Text>
	
		</View>

	);
}

export default About;
