import { router, Tabs } from "expo-router";
import { observer } from "mobx-react-lite";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Header1 } from "@/components";
import { tabScreenDefaultOptions } from "@/utils/navigationTheme";
import { useProtected } from "@/utils/router";
import { HomeSimpleDoor, Packages } from "iconoir-react-native";

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
            tabBarIcon: () => <HomeSimpleDoor />,
            title: "Dashboard",
            href: "/dashboard",
          }}
        />
        <Tabs.Screen
          name="tab3"
          options={{
            tabBarIcon: () => <Packages />,
            title: "UI kit",
            href: "/dashboard/tab3",
          }}
        />
      </Tabs>
    </>
  );
};

export default observer(Layout);
