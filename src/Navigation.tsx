import { Navio } from "rn-navio";
import { DashboardScreen } from "@app/screens";

const navio = Navio.build({
  screens: { DashboardScreen },
  stacks: {
    Main: ["DashboardScreen"],
  },
  root: "Main",
});

export const Navigation = navio.App;
