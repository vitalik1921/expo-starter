import { useState } from "react";

import { observer } from "mobx-react-lite";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import { Button, Link, LoaderScreen } from "@app/components";
import { Input } from "@app/components/ui-kit/Input";
import { useStores } from "@app/utils/store";

export const Login: NavioScreen = observer(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { auth } = useStores();

  const handleLogin = () => {
    auth.signInWithPassword(email, password);
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col p-[24] pt-[50]">
      <LoaderScreen caption="Loading..." visible={auth.isLoading} />
      <View className="flex-1">
        <Input
          name="email"
          label="Email"
          keyboardType="email-address"
          className="flex-1"
          onChange={(val) => setEmail(val)}
        />
        <Input
          name="pass"
          label="Password"
          className="flex-1"
          secureTextEntry
          onChange={(val) => setPassword(val)}
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
        <Button label="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
});
