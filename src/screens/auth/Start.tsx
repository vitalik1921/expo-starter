import { Image, Text, View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import startIllustration from "@app/assets/start-ilustration.jpg";
import { Button, Link } from "@app/components";

export const Start: NavioScreen = () => {
  return (
    <View className="flex flex-1 relative">
      <View className="flex-1 p-10 justify-between">
        <View className="h-[400] justify-start">
          <View className="flex-row justify-center mb-[40]">
            <Text className="text-title3 text-primary-dark font-bold">
              your
            </Text>
            <Text className="text-title3 font-bold">app</Text>
          </View>
          <View className="flex items-center">
            <Image
              source={startIllustration}
              resizeMode="contain"
              className="w-[330] h-[330]"
            />
          </View>
        </View>
        <View className="flex-1 items-center justify-end shrink">
          <Button
            label="Create account"
            // variant="start"
            className="w-[182] mb-[24]"
            onPress={() => null}
          />
          <Text className="text-regular font-light">
            Have an account? <Link path="Login">Log in</Link>
          </Text>
        </View>
      </View>
    </View>
  );
};
