import { Stack } from "expo-router";

import { screenDefaultOptions } from "@app/utils/navigationTheme";

export const Layout = () => {
  return <Stack screenOptions={screenDefaultOptions} />;
};

export default Layout;
