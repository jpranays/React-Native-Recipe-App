import {StyleSheet}  from "react-native"
 const Globalstyle=StyleSheet.create({
    Home:{height:"100%",backgroundColor:"white"},
    HomeBackImage:{position:"absolute",height:"100%",width:"100%",opacity:0.1},
    Modal:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ModalText:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "crimson",
    },
    ModalCloseIcon:{
        position:"absolute",
        top:10,
        right:0
    },
    Form:{
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 10,
    },
    TextInput:{
        borderBottomWidth: 3,
        width: "50%",
        textAlign: "center",
        fontSize: 20,
        paddingBottom: 5,
        borderBottomColor: "green",
    },
    FlatListContent:{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    FlatList:{
		marginTop: 20,
    },
    FlatListRecipe:{
        margin: 10,
    },
    FlatListLabel:{
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
    },
    FlatListImage:{
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    About:{
        height:"100%",
        backgroundColor:"wheat"
    },
    AboutBackground:{width:"100%",height:"100%",position:"absolute"},
    AboutText:{
        padding:20,
        color:"white",
        fontSize:20,
    },
    Recipe:{
        height:"100%"
    },
    RecipeBackImage:{
        width:"100%",height:"100%",
        opacity:0.5,
        position:"absolute"
    },
    RecipeIngredients:{
        fontSize:35,
        textAlign:"left",
        margin:10,
        fontWeight:"bold"
    },
    RecipeIngredientLists:{
        padding:5,
        margin:5,
        fontSize:20,
        fontFamily:"sans-serif"
    },
    RecipeButtonContainer:{
        alignItems:"center",
        justifyContent:"center"
    },
    RecipeButton:{
        width:"50%",
        marginBottom:10,
        elevation:6
     }
}) 
export default Globalstyle