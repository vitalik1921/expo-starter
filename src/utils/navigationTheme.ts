import { useMemo } from "react";

import { StatusBarStyle } from "expo-status-bar";
import { Appearance, Platform } from "react-native";

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { _rootStore, useStores } from "./store";
import { theme } from "./theme";

export function useNavigationTheme() {
  const { ui } = useStores();

  const appearance = useMemo(() => {
    return (
      ui.isAppearanceSystem
        ? Appearance.getColorScheme() ?? "light"
        : ui.appearance
    ) as "light" | "dark";
  }, [ui.appearance, ui.isAppearanceSystem]);

  const statusBarStyle: StatusBarStyle = useMemo(() => {
    if (ui.isAppearanceSystem) {
      return "auto";
    } else {
      switch (ui.appearance) {
        case "dark":
          return "light";
        case "light":
          return "dark";
        default:
          return "auto";
      }
    }
  }, [ui.appearance, ui.isAppearanceSystem]);

  const statusBarBGColor = useMemo(() => {
    const colorsMap = {
      light: theme.colors.sky.lightest,
      dark: theme.colors.ink.darkest,
    };
    return colorsMap[appearance];
  }, [appearance]);

  const navigationTheme = useMemo(() => {
    // for more information - https://reactnavigation.org/docs/themes
    const MyLightTheme: Theme = {
      dark: false,
      colors: {
        ...DefaultTheme.colors,
        primary: theme.colors.ink.darkest,
        background: theme.colors.white,
        card: theme.colors.sky.lighter,
        text: theme.colors.ink.darkest,
      },
    };

    const MyDarkTheme: Theme = {
      dark: true,
      colors: {
        ...DarkTheme.colors,
        primary: theme.colors.white,
        background: theme.colors.ink.darkest,
        card: theme.colors.ink.dark,
        text: theme.colors.white,
      },
    };

    switch (appearance) {
      case "dark":
        return MyDarkTheme;
      case "light":
        return MyLightTheme;
    }
    return DefaultTheme;
  }, [appearance]);

  return { statusBarStyle, statusBarBGColor, navigationTheme };
}

const headerBlurEffect = () => {
  const { ui } = _rootStore;
  const appearance = (
    ui.isAppearanceSystem
      ? Appearance.getColorScheme() ?? "light"
      : ui.appearance
  ) as "light" | "dark";
  return ui.isAppearanceSystem ? "regular" : appearance;
};

export const screenDefaultOptions = (): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerTintColor: theme.colors.ink.darkest,

  ...Platform.select({
    ios: {
      headerTransparent: true,
      headerBlurEffect: headerBlurEffect(), // this sets up blurred nav bar
      // if you'd like to have a solid color for a nav bar, then you should
      // set up `headerStyle: {backgroundColor: Colors.bg2Color}`
    },
  }),
});

export const tabScreenDefaultOptions = (): BottomTabNavigationOptions => ({
  tabBarActiveTintColor: theme.colors.ink.darkest,
  tabBarInactiveTintColor: theme.colors.sky.light,
  tabBarStyle: {
    backgroundColor: theme.colors.white,
    borderTopWidth: 0,
    elevation: 0,
  },
});

export const drawerScreenDefaultOptions = () => ({});
