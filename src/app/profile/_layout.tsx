import { Stack } from "expo-router";

import { screenDefaultOptions } from "@app/utils/navigationTheme";
import { useProtected } from "@app/utils/router";

export const Layout = () => {
  useProtected();
  return <Stack screenOptions={screenDefaultOptions} />;
};

export default Layout;
