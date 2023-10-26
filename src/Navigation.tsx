import { Navio } from "rn-navio";

import { Login, Start, Settings } from "@app/screens";
import {
  drawerScreenDefaultOptions,
  screenDefaultOptions,
  tabScreenDefaultOptions,
} from "./utils/designSystem";

export const navio = Navio.build({
  screens: {
    Start: { component: Start, options: { headerShown: false } },
    Login,
    Settings,
  },
  stacks: {
    Auth: {
      screens: ["Start", "Login", "Settings"],
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
