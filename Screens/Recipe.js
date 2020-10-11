import React from "react";
import { View, Text,ImageBackground, FlatList, Button, Linking } from "react-native";
import GlobalStyles from "../Shared/globalStyles"
function Recipe({ navigation:{state:{params:{image,ingredientLines,url}}}}) {
	return (
     <View  
	 style={GlobalStyles.Recipe}
	 >
		<ImageBackground source={{uri:image}}  style={GlobalStyles.RecipeBackImage} />
		   <Text style={GlobalStyles.RecipeIngredients}>Ingredients : </Text>
           <FlatList 
	
		   data={ingredientLines} renderItem={({item})=>{
			   return (<Text style={GlobalStyles.RecipeIngredientLists}>{item}</Text>)
		   }} 
		   keyExtractor={(item, key) => key.toString(6)}		   
		     />
			 <View
			 style={GlobalStyles.RecipeButtonContainer}
			 >
			 <View
			 style={GlobalStyles.RecipeButton}
			 >
			 <Button title="Open Full Recipe in Browser" onPress={()=>{
				 Linking.openURL(url)
			 }}
			 color="green" 
			 />
			 </View>
			 </View>
	 </View>
	);
}

export default Recipe;
