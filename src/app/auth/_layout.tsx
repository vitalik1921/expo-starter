import { Stack } from "expo-router";
import { observer } from "mobx-react-lite";

import { screenDefaultOptions } from "@/utils/navigationTheme";

export const Layout = () => {
  return <Stack screenOptions={screenDefaultOptions} />;
};

export default observer(Layout);
