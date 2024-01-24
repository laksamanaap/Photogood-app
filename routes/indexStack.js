import { Text, Platform, View } from "react-native";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShadow: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backround: "#fff",
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              <View></View>;
            },
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
