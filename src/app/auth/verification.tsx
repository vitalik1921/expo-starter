import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";

import { Button } from "@app/components";

export const Verification = () => {
  const handleCancel = () => {
    router.push("/auth/start");
  };

  return (
    <SafeAreaView className="flex flex-1 items-center justify-center">
      <Stack.Screen
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <Text className="text-regular font-light mb-[24]">
        We sent verification email to your email
      </Text>
      <Button label="Close" variant="link" onPress={handleCancel} />
    </SafeAreaView>
  );
};

export default Verification;