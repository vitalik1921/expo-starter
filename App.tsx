import { useEffect } from "react";

import * as SplashScreen from "expo-splash-screen";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation, navio } from "@app/Navigation";
import { useNavigationTheme } from "@app/utils/navigationTheme";
import { useInitRootStore } from "@app/utils/store";
import { supabase } from "@app/utils/supabase";
import { observer } from "mobx-react-lite";

if (__DEV__) {
  // Load Reactotron configuration in development. We don't want to
  // include this in our production bundle, so we are using `if (__DEV__)`
  // to only execute this in development.
  // require("./core/devtools/ReactotronConfig.ts");
}

function App() {
  useColorScheme();
  const navigationTheme = useNavigationTheme();
  const {
    rehydrated,
    rootStore: { auth },
  } = useInitRootStore();
  const isReady = [rehydrated].every((item) => !!item);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    supabase.auth.onAuthStateChange((_, session) => {
      auth.setSession(session);
      auth.setLoading(false);
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
          root={auth.isAuthenticated ? "Main" : "Auth"}
          navigationContainerProps={{
            theme: navigationTheme.navigationTheme,
            linking: {
              prefixes: [Linking.createURL("/")],
              config: {
                screens: {
                  Verification: "verification",
                },
              },
            },
          }}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default observer(App);
