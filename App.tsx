import { useState } from "react";

import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "expo-app-loading";

import { ViewContextProvider } from "./contexts/ViewContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { FontContextProvider } from "./contexts/FontContext";

import getFonts from "./helper/getFonts";

import HomeCalendar from "./pages/HomeCalendar";
import HomeList from "./pages/HomeList";
import Setting from "./pages/Setting";
import Search from "./pages/Search";
import AddCover from "./pages/AddCover";
import BackgroundSetting from "./pages/BackgroundSetting";
import LanguageSetting from "./pages/LanguageSetting";
import FontSetting from "./pages/FontSetting";
import AddMood from "./pages/AddMood";
import { RootStackParamList } from "./datas/rootType";
import { DataContextProvider } from "./contexts/DataContext";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFontsAndRestoreToken = async () => {
    await getFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFontsAndRestoreToken}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <FontContextProvider>
          <DataContextProvider>
            <ViewContextProvider>
              <NavigationContainer>
                <Stack.Navigator
                  initialRouteName="HomeCalendar"
                  screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="HomeCalendar">
                    {() => (
                      <Tab.Navigator
                        initialRouteName="HomeCalendar"
                        tabBar={() => null}
                        screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                          name="HomeCalendar"
                          component={HomeCalendar}
                        />
                        <Stack.Screen name="HomeList" component={HomeList} />
                        <Stack.Screen name="Settings" component={Setting} />
                        <Stack.Screen name="Search" component={Search} />
                        <Stack.Screen name="AddCover" component={AddCover} />
                        <Stack.Screen name="AddMood" component={AddMood} />
                        <Stack.Screen
                          name="BackgroundSetting"
                          component={BackgroundSetting}
                        />
                        <Stack.Screen
                          name="LanguageSetting"
                          component={LanguageSetting}
                        />
                        <Stack.Screen
                          name="FontSetting"
                          component={FontSetting}
                        />
                      </Tab.Navigator>
                    )}
                  </Stack.Screen>
                </Stack.Navigator>
              </NavigationContainer>
            </ViewContextProvider>
          </DataContextProvider>
        </FontContextProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
}
