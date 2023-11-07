import { Stack } from "expo-router";

import { screenDefaultOptions } from "@/utils/navigationTheme";
import { useProtected } from "@/utils/router";

export const Layout = () => {
  useProtected();
  return <Stack screenOptions={screenDefaultOptions} />;
};

export default Layout;
