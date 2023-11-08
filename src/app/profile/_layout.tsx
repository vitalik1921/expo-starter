import { Stack } from "expo-router";
import { observer } from "mobx-react-lite";

import { screenDefaultOptions } from "@/utils/navigationTheme";
import { useProtected } from "@/utils/router";

export const Layout = () => {
  useProtected();
  return <Stack screenOptions={screenDefaultOptions} />;
};

export default observer(Layout);
