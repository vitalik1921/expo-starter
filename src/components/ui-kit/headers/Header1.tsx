import { FC } from "react";

import { User } from "iconoir-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

type Header1Props = {
  rightButtonPress: () => void;
};

export const Header1: FC<Header1Props> = ({ rightButtonPress }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      className="flex flex-row px-[12] pt-[12] pb-[24] justify-between items-center"
      style={{ marginTop: top }}
    >
      <Text className="text-title3 font-bold">Dashboard</Text>
      <Bounceable>
        <User onPress={rightButtonPress} />
      </Bounceable>
    </View>
  );
};
