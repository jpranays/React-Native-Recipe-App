import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	Modal,
	Button,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
function Home({ navigation }) {
	const [query, setQuery] = useState(() => "chicken");
	const [items, fetchItems] = useState(() => []);
	const [loadStatus, setLoadingStatus] = useState(() => 0);
	const [error, setError] = useState(() => false);
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
			fetchItems(data.hits.filter((arr, index) => (index > 8 ? false : true)));
			console.log(data.hits)
			setError(() => false);
			// setQuery("");
		}
		fetchData().catch((err) => {
			setError(() => true);
		});
	}, [loadStatus]);
	return (
		<View style={{height:"100%"}}>
			<Modal visible={error} 
			animationType="slide"
			>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							fontSize: 30,
							fontWeight: "bold",
							textAlign: "center",
							color: "crimson",
						}}
					>
						An Error Occured
					</Text>
					<MaterialIcons
						name="close"
						onPress={() => {
							setError((prev) => false);
						}}
						size={50}
						color="red"
						style={{
							position:"absolute",
							top:10,
							right:0
						}}
					/>
				</View>
			</Modal>
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
			<View>
				<FlatList
					data={items}
					numColumns="3"
					style={{
						marginTop: 20,
					}}
					contentContainerStyle={{
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 20,
					}}
					
					renderItem={({
						item: {
							recipe: { image, label, ingredientLines, url },
						},
					}) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Recipe",{title:label,image:image,ingredientLines:ingredientLines,url:url}
						);
							}}
						>
							<View
								style={{
									margin: 10,
								}}
							>
								<Text
									style={{
										backgroundColor: "yellow",
										padding: 5,
										borderRadius: 10,
										marginBottom: 5,
										width: 100,
										fontSize: 15,
										textAlign: "center",
										elevation:6,
									shadowOffset:{width:5,height:5},
									shadowColor:"grey",
									}}
								>
									{label}
								</Text>
								<View 
								style={{
									elevation:6
								}}
								> 
								<Image
									source={{ uri: image }}
									style={{
										width: 100,
										height: 100,
										borderRadius: 10,
									}}
								/>

								</View>
								</View>
						</TouchableOpacity>
					)}
					keyExtractor={(item, key) => key.toString(6)}
				/>
			</View>
		</View>
	);
}

export default Home;
