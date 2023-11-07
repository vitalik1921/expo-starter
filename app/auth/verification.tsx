import { Button } from "@app/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-ui-lib";
import { router} from "expo-router";

export const Verification = () => {
  const handleCancel = () => {
    router.push("/");
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

export default Verification;

// Verification.options = {
//   headerShown: false,
//   animation: "fade_from_bottom",
// };
