import { Header1 } from "@/components";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native-ui-lib";

export const UiKit = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <Header1
        onRightButtonPress={() => router.push("/profile")}
        style={{ marginTop: top }}
      >
        UI kit
      </Header1>
      <View className="flex-1 p-[24] pt-0">
        <Text>UI kit</Text>
      </View>
    </>
  );
};

export default UiKit;
