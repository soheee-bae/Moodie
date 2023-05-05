import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ThemeProvider } from "./contexts/ThemeContext";
import HomeCalendar from "./pages/HomeCalendar";
import HomeList from "./pages/HomeList";
import Setting from "./pages/Setting";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider>
          <Stack.Navigator
            initialRouteName="HomeCalendar"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeCalendar">
              {() => (
                <Tab.Navigator
                  initialRouteName="HomeCalendar"
                  tabBar={() => null}
                  screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="HomeCalendar" component={HomeCalendar} />
                  <Stack.Screen name="HomeList" component={HomeList} />
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
