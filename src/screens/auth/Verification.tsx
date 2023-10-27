import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

export const Verification: NavioScreen = () => {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center">
      <Text className="text-regular font-light mb-[24]">
        We sent verification email to your email
      </Text>
    </SafeAreaView>
  );
};
