import { Image, Text, View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import startIllustration from "@app/assets/start-ilustration.jpg";
import { Button, Link } from "@app/components";
import { SafeAreaView } from "react-native-safe-area-context";

export const Start: NavioScreen = () => {
  return (
    <SafeAreaView className="flex flex-1 relative">
      <View className="flex-1 p-10 justify-between">
        <View className="h-[400] justify-start">
          <View className="flex-row justify-center mb-[40]">
            <Text className="text-title3 text-primary-dark font-bold">
              warp
            </Text>
            <Text className="text-title3 font-bold">kit</Text>
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
            label="Create account"
            path="SignUp"
            className="w-[182] mb-[24]"
            onPress={() => null}
          />
          <Text className="text-regular font-light">
            Have an account? <Link path="Login">Log in</Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
