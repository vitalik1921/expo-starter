import { useEffect } from "react";

import { Slot, router } from "expo-router";
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
  ThemeProvider,
  getStateFromPath as _getStateFromPath,
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
          {/* <Navigation
            root={auth.isAuthenticated ? "DashboardTabs" : "Auth"}
            navigationContainerProps={{
              theme: navigationTheme.navigationTheme,
              linking: {
                prefixes: [Linking.createURL("/")],
                subscribe: customURLListener,
                config: {
                  screens: {
                    Auth: {
                      path: "app",
                      screens: {
                        Login: "verification",
                      },
                    },
                    Main: {
                      path: "main",
                      screens: {
                        UpdatePass: "update-pass",
                      },
                    },
                  },
                },
              },
            }}
          /> */}
        </IconoirProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

// const customURLListener = (listener: (url: string) => void) => {
//   const onReceiveURL = ({ url }: { url: string }) => {
//     if (url.indexOf("#") !== -1) {
//       const chunks = url.split("#");
//       const _url = chunks[0];
//       const paramsStr = chunks[1];
//       const params = paramsStr.split("&").reduce((acc, curr) => {
//         const chunks = curr.split("=");
//         const key = chunks[0];
//         const value = chunks[1];
//         acc[key] = value;
//         return acc;
//       }, {} as Record<string, string>);

//       if ("error" in params && "error_description" in params) {
//         Alert.alert(params["error_description"].split("+").join(" "));
//         return;
//       }

//       if ("access_token" in params && "refresh_token" in params) {
//         supabase.auth
//           .setSession({
//             access_token: params["access_token"],
//             refresh_token: params["refresh_token"],
//           })
//           .then(() =>
//             setTimeout(() => {
//               if (_url.indexOf("update-pass") !== -1) {
//                 listener(_url);
//               }
//             }, 0)
//           );
//         return;
//       }
//     }
//     listener(url);
//   };

//   const eventListenerSubscription = Linking.addEventListener(
//     "url",
//     onReceiveURL
//   );

//   return () => eventListenerSubscription.remove();
// };

export default observer(RootLayout);
