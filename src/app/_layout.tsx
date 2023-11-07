import { useEffect } from "react";

import { router, Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { IconoirProvider } from "iconoir-react-native";
import { observer } from "mobx-react-lite";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useNavigationTheme } from "@app/utils/navigationTheme";
import { useInitRootStore } from "@app/utils/store";
import { supabase } from "@app/utils/supabase";
import { theme } from "@app/utils/theme";
import {
  getStateFromPath as _getStateFromPath,
  ThemeProvider,
} from "@react-navigation/native";

if (__DEV__) {
  // Load Reactotron configuration in development. We don't want to
  // include this in our production bundle, so we are using `if (__DEV__)`
  // to only execute this in development.
  // require("./core/devtools/ReactotronConfig.ts");
}

export const RootLayout = () => {
  useColorScheme();
  const navigationTheme = useNavigationTheme();
  const {
    rehydrated,
    rootStore: { auth },
  } = useInitRootStore();
  const isReady = [rehydrated, !auth.isLoading].every((item) => !!item);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    supabase.auth.onAuthStateChange((_, session) => {
      auth.setSession(session);
      auth.setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isReady) {
      router.replace(auth.isAuthenticated ? "/dashboard" : "/auth/start");
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
        <IconoirProvider
          iconProps={{
            color: theme.colors.ink.darkest,
            strokeWidth: 2,
            width: "24",
            height: "24",
          }}
        >
          <ThemeProvider value={navigationTheme.navigationTheme}>
            <Slot />
          </ThemeProvider>
        </IconoirProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default observer(RootLayout);
