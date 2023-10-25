import { useEffect } from "react";

import * as Linking from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
// import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "@app/Navigation";
import {
  getNavigationTheme,
  getStatusBarBGColor,
  getStatusBarStyle,
} from "@app/utils/designSystem";

import { useInitRootStore } from "./src/utils/store/useStores";
import { useColorScheme } from "react-native";

if (__DEV__) {
  // Load Reactotron configuration in development. We don't want to
  // include this in our production bundle, so we are using `if (__DEV__)`
  // to only execute this in development.
  // require("./core/devtools/ReactotronConfig.ts");
}

export default function App() {
  useColorScheme();
  const { rehydrated } = useInitRootStore();
  // const [loaded] = useFonts({
  //   Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  //   InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  // });
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
  );
}
