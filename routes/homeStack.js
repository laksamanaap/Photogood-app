import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Login from "../screens/Login";
import Register from "../screens/Register";

const screens = {
  Register: {
    screen: Register,
  },
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  Detail: {
    screen: Detail,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
