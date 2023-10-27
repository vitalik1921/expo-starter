import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import { Button, Link } from "@app/components";
import { Input } from "@app/components/ui-kit/Input";

export const Login: NavioScreen = () => {
  return (
    <SafeAreaView className="flex flex-1 flex-col p-[24] pt-[120]">
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
        <Text className="text-regular font-light mb-[24]">
          By continuing, you agree to our{" "}
          <Link path="https://google.com">Terms of Service</Link> and{" "}
          <Link path="https://google.com">Privacy Policy</Link>.
        </Text>
        <Button label="Login" onPress={() => undefined} />
      </View>
    </SafeAreaView>
  );
};
