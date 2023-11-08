import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";

import { Button } from "@/components";

export const Verification = () => {
  const handleCancel = () => {
    router.push("/auth/start");
  };

  return (
    <SafeAreaView className="flex flex-1 items-center justify-center p-[24]">
      <Stack.Screen
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <Text className="text-regular font-light mb-[24]">
        We have sent a verification email to your inbox. To complete the
        process, please open the verification link on your mobile device.
      </Text>
      <Button label="Close" onPress={handleCancel} />
    </SafeAreaView>
  );
};

export default Verification;
