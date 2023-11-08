import { Tabs } from "expo-router";
import { HomeSimpleDoor, Packages } from "iconoir-react-native";
import { observer } from "mobx-react-lite";

import { tabScreenDefaultOptions } from "@/utils/navigationTheme";
import { useProtected } from "@/utils/router";

export const Layout = () => {
  useProtected();
  return (
    <>
      <Tabs
        screenOptions={{
          ...tabScreenDefaultOptions(),
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: (props) => <HomeSimpleDoor color={props.color} />,
            title: "Dashboard",
            href: "/dashboard",
          }}
        />
        <Tabs.Screen
          name="ui-kit"
          options={{
            tabBarIcon: (props) => <Packages color={props.color} />,
            title: "UI kit",
            href: "/dashboard/ui-kit",
          }}
        />
      </Tabs>
    </>
  );
};

export default observer(Layout);
