import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Setting from "./pages/Setting";
import { ThemeProvider } from "./contexts/themeContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home">
              {() => (
                <Tab.Navigator
                  initialRouteName="Home"
                  tabBar={() => null}
                  screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Settings" component={Setting} />
                </Tab.Navigator>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
