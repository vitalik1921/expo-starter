import { Navio } from "rn-navio";

import {
  Dashboard,
  Login,
  ResetPass,
  Settings,
  SignUp,
  Start,
  Tab2,
  Tab3,
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
    Start,
    Login,
    SignUp,
    ResetPass,
    Verification,
    Dashboard,
    Tab2,
    Tab3,
    UpdatePass,
    Settings,
  },
  stacks: {
    AuthStack: {
      screens: ["Start", "Login", "SignUp", "ResetPass", "Verification"],
      navigatorProps: {
        screenOptions: {
          headerShown: true,
        },
      },
    },
  },
  tabs: {
    Dashboard: {
      content: {
        DashboardTab: {
          stack: ["Dashboard", "Settings", "UpdatePass"],
          options: () => ({
            title: "Home",
          }),
        },
        Tab2: {
          stack: ["Tab2"],
          options: () => ({
            title: "Tab2",
          }),
        },
        Tab3: {
          stack: ["Tab3"],
          options: () => ({
            title: "Tab3",
          }),
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
