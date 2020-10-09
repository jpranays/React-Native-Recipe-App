import React from "react";
import { View, Text,Image,ImageBackground, FlatList, Button, Linking } from "react-native";
function Recipe({ navigation:{state:{params:{title,image,ingredientLines,url}}}}) {
	// console.log(ingredientLines)
	return (
     <View  
	 style={{
		 height:"100%"
	 }}
	 >
		<ImageBackground source={{uri:image}}  style={{
			width:"100%",height:"100%",
			opacity:0.5,
			position:"absolute"
		}} />
		   <Text style={{
			   fontSize:35,
			   textAlign:"left",
			   margin:10,
			   fontWeight:"bold"
			    
		   }}>Ingredients : </Text>
           <FlatList 
	
		   data={ingredientLines} renderItem={({item})=>{
			   console.log(item)
			   return (<Text style={{
				   padding:5,
				   margin:5,
                   fontSize:20,
				   fontWeight:"bold"
			   }}>{item}</Text>)
		   }} 
		   keyExtractor={(item, key) => key.toString(6)}		   
		     />
			 <View
			 style={{
				 alignItems:"center",
				 justifyContent:"center"
			 }}
			 >
			 <View
			 style={{
				width:"50%",
				marginBottom:10,
				elevation:6
			 }}
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
