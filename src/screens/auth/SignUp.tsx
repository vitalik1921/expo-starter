import { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import { Button, Link, LoaderScreen } from "@app/components";
import { Input } from "@app/components/ui-kit/Input";
import { observer } from "mobx-react-lite";
import { useStores } from "@app/utils/store";
import { navio } from "@app/Navigation";

export const SignUp: NavioScreen = observer(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { auth } = useStores();

  const handleSignUp = () => {
    auth.signUpWithPassword(email, password);
    navio.stacks.push("Verification");
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col p-[24] pt-[120]">
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
          onPress={() => undefined}
        />
      </View>
      <View className="flex-1 items-center justify-end">
        <Text className="text-regular font-light mb-[24]">
          By continuing, you agree to our{" "}
          <Link path="https://google.com">Terms</Link> of{" "}
          <Link path="https://google.com">Service and Privacy</Link> Policy.
        </Text>
        <Button label="Sign up" onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  );
});

SignUp.options = {
  title: "Create new account",
};
