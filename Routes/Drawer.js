import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Stack from "./Stack";
import AboutStack from "./AboutStack";

const Screens = {
	Home: {
		screen: Stack,
	},
	About: {
		screen: AboutStack,
	},
};

const Drawer = createDrawerNavigator(Screens);

export default createAppContainer(Drawer);
