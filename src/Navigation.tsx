import { Navio } from "rn-navio";

import { Header1 } from "@app/components";
import {
  Dashboard,
  Login,
  ResetPass,
  Settings,
  SignUp,
  Start,
  UIKit,
  UpdatePass,
  Verification,
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
    Dashboard: {
      component: Dashboard,
      options: {
        header: () => <Header1 />,
        headerTitle: "",
      },
    },
    Settings,
  },
  stacks: {
    Auth: {
      screens: ["Start", "Login", "SignUp", "ResetPass", "Verification"],
      navigatorProps: {
        screenOptions: {
          headerShown: true,
        },
      },
    },
    Main: {
      screens: ["Dashboard", "Settings", "UIKit", "UpdatePass"],
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
