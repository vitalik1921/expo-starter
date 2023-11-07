import { router, Tabs } from "expo-router";

import { Header1 } from "@app/components";
import { tabScreenDefaultOptions } from "@app/utils/navigationTheme";
import { useProtected } from "@app/utils/router";

export const Layout = () => {
  useProtected();
  return (
    <>
      <Header1 onRightButtonPress={() => router.push("/profile")} />
      <Tabs screenOptions={{ ...tabScreenDefaultOptions, headerShown: false }}>
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

export default Layout;
