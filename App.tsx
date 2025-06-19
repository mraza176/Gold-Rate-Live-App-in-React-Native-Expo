import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import GoldRateScreen from "./screens/GoldRate";
import BoardRateScreen from "./screens/BoardRate";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator tabBarPosition="bottom" screenOptions={{}}>
          <Tab.Screen name="Live Market" component={GoldRateScreen} />
          <Tab.Screen name="Board Rate" component={BoardRateScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
