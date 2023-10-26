import { View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import { Button } from "@app/components";
import { navio } from "@app/Navigation";

export const Start: NavioScreen = () => {
  return (
    <View className="flex flex-1 flex-col p-[24]">
      <Button label="login" link onPress={() => navio.N.navigate("Login")} />
    </View>
  );
};
