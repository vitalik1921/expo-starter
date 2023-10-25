import { Navio } from "rn-navio";

import { Login } from "@app/screens";

const navio = Navio.build({
  screens: { Login },
  stacks: {
    Auth: {
      screens: ["Login"],
      navigatorProps: {
        screenOptions: {
          headerShown: false,
        },
      },
    },
  },
  root: "Auth",
});

export const Navigation = navio.App;
