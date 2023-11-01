import { navio } from "@app/Navigation";
import { Button } from "@app/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

export const Verification: NavioScreen = () => {
  const handleCancel = () => {
    navio.stacks.push("AuthStack");
  };

  return (
    <SafeAreaView className="flex flex-1 items-center justify-center">
      <Text className="text-regular font-light mb-[24]">
        We sent verification email to your email
      </Text>
      <Button label="Cancel" variant="link" onPress={handleCancel} />
    </SafeAreaView>
  );
};

Verification.options = {
  headerShown: false,
  animation: "fade_from_bottom",
};
