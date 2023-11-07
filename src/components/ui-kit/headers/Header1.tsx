import { FC } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Avatar, Text, View } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

type Header1Props = {
  onRightButtonPress: () => void;
};

export const Header1: FC<Header1Props> = ({ onRightButtonPress }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      className="flex flex-row px-[12] pt-[12] pb-[24] justify-between items-center"
      style={{ marginTop: top }}
    >
      <Text className="text-title3 font-bold">Dashboard</Text>
      <Bounceable onPress={onRightButtonPress}>
        <Avatar
          source={{
            uri: "https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg",
          }}
          size={32}
        />
      </Bounceable>
    </View>
  );
};
