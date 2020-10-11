import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	Modal,
	Image,
	FlatList,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GlobalStyles from "../Shared/globalStyles"
function Home({ navigation }) {
	const [query, setQuery] = useState(() => "chicken");
	const [items, fetchItems] = useState(() => []);
	const [loadStatus, setLoadingStatus] = useState(() => 0);
	const [error, setError] = useState(() => false);
	
	useEffect(() => {
		async function fetchData() {

			const response = await fetch(
				`https://api.edamam.com/search?q=${query || "chicken" }&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}`
			);
			const data = await response.json();
			fetchItems(data.hits.filter((arr, index) => (index > 8 ? false : true)));
			setError(() => false);
		}
		fetchData().catch((err) => {
			setError(() => true);
		});
	}, [loadStatus]);
	return (
		<View style={GlobalStyles.Home}>
			<ImageBackground source={require("../assets/backImage.jpg")} style={GlobalStyles.HomeBackImage} />
			<Modal visible={error} 
			animationType="slide"
			>
				<View
					style={GlobalStyles.Modal}
				>
					<Text
						style={GlobalStyles.ModalText}
					>
						An Error Occured
					</Text>
					<Text
						style={GlobalStyles.ModalText}
					>
				 Check You Internet Connection or Try Again Later.
					</Text>
					<MaterialIcons
						name="close"
						onPress={() => {
							setError((prev) => false);
						}}
						size={50}
						color="red"
						style={GlobalStyles.ModalCloseIcon}
					/>
				</View>
			</Modal>
			<View
				style={GlobalStyles.Form}
			>
				<TextInput
					keyboardType="web-search"
					onSubmitEditing={() => {
						setLoadingStatus((prevStatus) => !prevStatus);
					}}
					style={GlobalStyles.TextInput}
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
					style={
						GlobalStyles.FlatList
					}
					contentContainerStyle={GlobalStyles.FlatListContent}
					
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
								style={GlobalStyles.FlatListRecipe}
							>
								<Text
									style={GlobalStyles.FlatListLabel}
								>
									{label}
								</Text>
								<View 
								> 
								<Image
									source={{ uri: image }}
									style={GlobalStyles.FlatListImage}
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
