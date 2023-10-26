import { View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";
import { Button } from "@app/components";

export const Login: NavioScreen = () => {
  return (
    <View className="flex flex-1 flex-row items-center justify-center">
      <Button
        disabled
        label="Sign Up"
        className=""
        onPress={() => console.warn("test")}
      />
    </View>
  );
};
