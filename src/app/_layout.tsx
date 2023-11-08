import "@/utils/linking";

import { useEffect, useState } from "react";

import { router, Slot, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { IconoirProvider } from "iconoir-react-native";
import { observer } from "mobx-react-lite";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useNavigationTheme } from "@/utils/navigationTheme";
import { useInitRootStore } from "@/utils/store";
import { supabase } from "@/utils/supabase";
import { theme } from "@/utils/theme";
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

SplashScreen.preventAutoHideAsync();

export const RootLayout = () => {
  useColorScheme();
  const segments = useSegments();
  const navigationTheme = useNavigationTheme();

  const {
    rehydrated,
    rootStore: { auth },
  } = useInitRootStore();
  const [sessionInitiated, setSessionInitiated] = useState(false);

  const isReady = [rehydrated, sessionInitiated].every((item) => !!item);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [isReady]);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      auth.setSession(session);
      auth.setLoading(false);
      setSessionInitiated(true);
    });
  }, []);

  useEffect(() => {
    if (sessionInitiated && auth.isAuthenticated) {
      if (
        segments.includes("update-pass-handler") ||
        segments.includes("verification-handler")
      )
        return;
      router.replace("/dashboard");
    }
  }, [sessionInitiated, auth.isAuthenticated]);

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
            color: theme.colors.primary.base,
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
