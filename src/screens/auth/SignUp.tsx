import { Text, View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import { Button } from "@app/components";
import { Input } from "@app/components/ui-kit/Input";

export const SignUp: NavioScreen = () => {
  return (
    <View className="flex flex-1 flex-col p-[24] pt-[120]">
      <View className="flex-1">
        <Input name="login" label="Login" className="flex-1" />
        <Input
          name="pass"
          label="Password"
          className="flex-1"
          secureTextEntry
        />
        <Button
          variant="link"
          label="Forgot password?"
          className="self-start"
        />
      </View>
      <View className="flex-1 items-center justify-end">
        <Text className="text-regular font-light">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
        <Button label="Login" onPress={() => undefined} />
      </View>
    </View>
  );
};
