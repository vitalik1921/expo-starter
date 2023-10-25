import { useEffect } from "react";

import * as Linking from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "@app/Navigation";
import {
  getNavigationTheme,
  getStatusBarBGColor,
  getStatusBarStyle,
} from "@app/utils/designSystem";
import { useInitRootStore } from "@app/utils/store";

if (__DEV__) {
  // Load Reactotron configuration in development. We don't want to
  // include this in our production bundle, so we are using `if (__DEV__)`
  // to only execute this in development.
  // require("./core/devtools/ReactotronConfig.ts");
}

export default function App() {
  useColorScheme();
  const { rehydrated } = useInitRootStore();
  const isReady = [rehydrated].every((item) => !!item);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar
          style={getStatusBarStyle()}
          backgroundColor={getStatusBarBGColor()}
        />
        <Navigation
          navigationContainerProps={{
            theme: getNavigationTheme(),
            linking: {
              prefixes: [Linking.createURL("/")],
            },
          }}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
