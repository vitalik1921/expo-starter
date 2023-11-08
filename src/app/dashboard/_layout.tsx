import { router, Tabs } from "expo-router";
import { observer } from "mobx-react-lite";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Header1 } from "@/components";
import { tabScreenDefaultOptions } from "@/utils/navigationTheme";
import { useProtected } from "@/utils/router";

export const Layout = () => {
  useProtected();
  const { top } = useSafeAreaInsets();
  return (
    <>
      <Header1
        onRightButtonPress={() => router.push("/profile")}
        style={{ marginTop: top }}
      />
      <Tabs
        screenOptions={{
          ...tabScreenDefaultOptions(),
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            href: "/dashboard",
          }}
        />
        <Tabs.Screen
          name="tab2"
          options={{
            href: "/dashboard/tab2",
          }}
        />
        <Tabs.Screen
          name="tab3"
          options={{
            href: "/dashboard/tab3",
          }}
        />
      </Tabs>
    </>
  );
};

export default observer(Layout);
