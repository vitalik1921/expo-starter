import { FC } from "react";

import { Avatar, Text, View, ViewProps } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

import { useRoute } from "@react-navigation/native";

type Header1Props = {
  onRightButtonPress: () => void;
} & ViewProps;

export const Header1: FC<Header1Props> = ({
  children,
  onRightButtonPress,
  ...props
}) => {
  const route = useRoute();
  console.log("route", route);
  return (
    <View
      className="flex flex-row px-[12] pt-[12] pb-[24] justify-between items-center"
      {...props}
    >
      <Text className="text-title3 font-bold">{children}</Text>
      <Bounceable onPress={onRightButtonPress}>
        <Avatar
          source={{
            uri: "https://i.pinimg.com/1200x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg",
          }}
          size={32}
        />
      </Bounceable>
    </View>
  );
};
