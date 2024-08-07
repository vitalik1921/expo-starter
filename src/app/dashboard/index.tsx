import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";

import { Header1 } from "@/components";

export const Dashboard = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <Header1
        onRightButtonPress={() => router.push("/profile")}
        style={{ marginTop: top }}
      >
        Dashboard
      </Header1>
      <View className="flex-1 p-[24] pt-0 items-center justify-center">
        <Text>You dashboard will be implemented here</Text>
      </View>
    </>
  );
};

export default Dashboard;
