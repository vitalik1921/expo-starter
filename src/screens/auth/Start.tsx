import { Image, View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import startBg from "@app/assets/start-bg.jpg";
import { Button, Title3 } from "@app/components";

export const Start: NavioScreen = () => {
  return (
    <View className="flex flex-1 relative">
      <Image
        source={startBg}
        className="absolute w-full h-full"
        resizeMode="stretch"
      />
      <View className="flex-1 p-10">
        <View className="flex-1">
          <Title3 className="text-center">youApp</Title3>
        </View>
        <View className="flex-1 justify-end">
          <Button label="Get started" variant="start" onPress={() => null} />
        </View>
      </View>
    </View>
  );
};
