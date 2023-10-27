import { useEffect } from "react";

import * as Linking from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "@app/Navigation";
import { useNavigationTheme } from "@app/utils/navigationTheme";
import { useInitRootStore } from "@app/utils/store";
import { supabase } from "@app/utils/supabase";

if (__DEV__) {
  // Load Reactotron configuration in development. We don't want to
  // include this in our production bundle, so we are using `if (__DEV__)`
  // to only execute this in development.
  // require("./core/devtools/ReactotronConfig.ts");
}

export default function App() {
  useColorScheme();
  const navigationTheme = useNavigationTheme();
  const { rehydrated, rootStore } = useInitRootStore();
  const isReady = [rehydrated].every((item) => !!item);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    supabase.auth.onAuthStateChange((_, session) => {
      // TODO: implement user fetching
      console.warn("session", session);
      rootStore.auth.setSession(session);
      rootStore.auth.setLoading(false);
    });
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
          style={navigationTheme.statusBarStyle}
          backgroundColor={navigationTheme.statusBarBGColor}
        />
        <Navigation
          navigationContainerProps={{
            theme: navigationTheme.navigationTheme,
            linking: {
              prefixes: [Linking.createURL("/")],
            },
          }}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
