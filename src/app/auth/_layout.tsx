import { Stack } from "expo-router";

import { screenDefaultOptions } from "@/utils/navigationTheme";

export const Layout = () => {
  return <Stack screenOptions={screenDefaultOptions} />;
};

export default Layout;
