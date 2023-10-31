import { Navio } from "rn-navio";

import {
  Login,
  SignUp,
  Start,
  Verification,
  ResetPass,
  UpdatePass,
  UIKit,
  Settings,
} from "@app/screens";
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
    ResetPass,
    UpdatePass,
    Verification: { component: Verification, options: { headerShown: false } },
    UIKit,
    Settings,
  },
  stacks: {
    Auth: {
      screens: [
        "Start",
        "Login",
        "SignUp",
        "ResetPass",
        "UpdatePass",
        "Verification",
      ],
      navigatorProps: {
        screenOptions: {
          headerShown: true,
        },
      },
    },
    Main: {
      screens: ["Settings", "UIKit"],
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
