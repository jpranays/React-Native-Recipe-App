import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
function Home({ navigation }) {
	const [query, setQuery] = useState(() => "chicken");
	const [items, fetchItems] = useState(() => []);
	const [loadStatus, setLoadingStatus] = useState(() => 0);
	// useEffect(() => {

	// }, []);
	useEffect(() => {
		async function fetchData() {
			let Api_Key = "4f178338bbff31ecef9be50fad3fc7ad";
			let Api_ID = "f90763b9";
			const response = await fetch(
				`https://api.edamam.com/search?q=${query}&app_id=${Api_ID}&app_key=${Api_Key}`
			);
			const data = await response.json();
			console.log(data);
			// setQuery("");
		}
		fetchData();
	}, [loadStatus]);
	return (
		<View style={{}}>
			<View
				style={{
					width: "100%",
					justifyContent: "center",
					flexDirection: "row",
					marginTop: 10,
				}}
			>
				<TextInput
					keyboardType="web-search"
					onSubmitEditing={() => {
						setLoadingStatus((prevStatus) => !prevStatus);
					}}
					style={{
						borderBottomWidth: 3,
						width: "50%",
						textAlign: "center",
						fontSize: 20,
						paddingBottom: 5,
						borderBottomColor: "green",
					}}
					value={query}
					onChangeText={(value) => {
						setQuery(value);
					}}
				/>
			</View>
		</View>
	);
}

export default Home;
