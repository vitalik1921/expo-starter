import { Header1 } from "@app/components";
import { Tabs, router } from "expo-router";

export const RootLayout = () => {
  return (
    <>
      <Header1 onRightButtonPress={() => router.push("/profile")} />
      <Tabs screenOptions={{ headerShown: false }}>
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

export default RootLayout;
