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
    },
    DashboardStack: {
      screens: ["Dashboard", "Settings", "UpdatePass"],
    },
    Tab2Stack: {
      screens: ["Tab2"],
    },
    Tab3Stack: {
      screens: ["Tab3"],
    },
  },
  tabs: {
    DashboardTabs: {
      content: {
        DashboardTab: {
          stack: "DashboardStack",
          options: () => ({
            title: "Home",
          }),
        },
        Tab2Tab: {
          stack: "Tab2Stack",
          options: () => ({
            title: "Tab2",
          }),
        },
        Tab3Tab: {
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
