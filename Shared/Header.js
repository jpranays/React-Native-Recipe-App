import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
function Header({ title, navigation }) {
	return (
		<View
			style={{
				height: "100%",
				width: "100%",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
				
			}}
		>
			<MaterialIcons
				name="menu"
				onPress={() => {
					navigation.openDrawer();
				}}
				size={35}
				color="white"
				style={{
					marginRight: "auto",
				}}
			/>
			<Text
				style={{
					fontSize: 30,
					position: "absolute",
					color:"white",
				}}
			>
				{title}
			</Text>
		</View>
	);
}

export default Header;
