import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { scale } from "@/utils/styling";
import LiveMarketScreen from "@/screens/LiveMarket";
import BoardRateScreen from "@/screens/BoardRate";
import { StatusBar } from "expo-status-bar";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <StatusBar style="light" />
        <Tab.Navigator
          tabBarPosition="bottom"
          screenOptions={{
            tabBarStyle: { backgroundColor: colors.background },
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.primary,
            tabBarLabelStyle: {
              fontSize: scale(16),
              fontWeight: "bold",
            },
            tabBarIndicator: () => null,
          }}
        >
          <Tab.Screen
            name="لایؤ مارکٹ"
            component={LiveMarketScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome6
                  name="arrow-trend-up"
                  color={color}
                  size={scale(24)}
                />
              ),
            }}
          />
          <Tab.Screen
            name="بورڈ ریٹ"
            component={BoardRateScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome6
                  name="chart-line"
                  color={color}
                  size={scale(24)}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
