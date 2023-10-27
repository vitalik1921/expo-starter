import { useMemo } from "react";
import { useStores } from "../store";
import { StatusBarStyle } from "expo-status-bar";
import { Appearance } from "react-native";
import { theme } from "../theme";
import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

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
