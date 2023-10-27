import { Navio } from "rn-navio";

import { Login, SignUp, Start, Settings } from "@app/screens";
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
    Settings,
  },
  stacks: {
    Auth: {
      screens: ["Start", "Login", "SignUp", "Settings"],
      navigatorProps: {
        screenOptions: {
          headerShown: true,
        },
      },
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
