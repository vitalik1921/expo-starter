import { Navio } from "rn-navio";

import { Login, SignUp, Start, Verification, Settings } from "@app/screens";
import {
  drawerScreenDefaultOptions,
  screenDefaultOptions,
  tabScreenDefaultOptions,
} from "./utils/navigationTheme";

export const navio = Navio.build({
  screens: {
    Start: { component: Start, options: { headerShown: false } },
    Login,
    SignUp,
    Verification,
    Settings,
  },
  stacks: {
    Auth: {
      screens: ["Start", "Login", "SignUp"],
      navigatorProps: {
        screenOptions: {
          headerShown: true,
        },
      },
    },
    Verification: {
      screens: ["Verification"],
      navigatorProps: {
        screenOptions: {
          headerShown: false,
        },
      },
    },
    Main: {
      screens: ["Settings"],
    },
  },
  root: "Auth",
  defaultOptions: {
    stacks: {
      screen: screenDefaultOptions,
    },
    tabs: {
      screen: tabScreenDefaultOptions,
    },
    drawers: {
      screen: drawerScreenDefaultOptions,
    },
  },
});

export const Navigation = navio.App;
