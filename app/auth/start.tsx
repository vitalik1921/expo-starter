import { Image, Text, View } from "react-native-ui-lib";

import startIllustration from "@app/assets/start-ilustration.jpg";
import { Button, Link } from "@app/components";
import { SafeAreaView } from "react-native-safe-area-context";

export const Start = () => {
  return (
    <SafeAreaView className="flex flex-1 relative">
      <View className="flex-1 p-10 justify-between">
        <View className="h-[400] justify-start">
          <View className="flex-row justify-center mb-[40]">
            <Text className="text-title2 text-primary-dark font-bold">
              warp
            </Text>
            <Text className="text-title2 font-bold">kit</Text>
          </View>
          <View className="flex items-center">
            <Image
              source={startIllustration}
              resizeMode="contain"
              className="w-[330] h-[330]"
            />
          </View>
        </View>
        <View className="flex-1 items-center justify-end">
          <Button
            path="/auth/sign-up"
            label="Create account"
            className="w-[182] mb-[24]"
          />
          <Text className="text-regular font-light">
            Have an account? <Link path="/auth/login">Log in</Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;

// Start.options = {
//   headerShown: false,
// };
