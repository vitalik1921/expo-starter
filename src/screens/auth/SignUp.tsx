import { useState } from "react";

import { observer } from "mobx-react-lite";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import { Button, Link, LoaderScreen, useForm } from "@app/components";
import { Input } from "@app/components/ui-kit/Input";
import { navio } from "@app/Navigation";
import { useStores } from "@app/utils/store";
import { Alert } from "react-native";

interface FormProps {
  email: string;
  pass: string;
  passRepeat: string;
}

export const SignUp: NavioScreen = observer(() => {
  const { Form } = useForm<FormProps>();
  const { auth } = useStores();

  const handleSignUp = ({ email, pass, passRepeat }: FormProps) => {
    if (pass !== passRepeat) {
      Alert.alert(
        "Passwords entered do not match. Please ensure they are the same."
      );
      return;
    }
    auth
      .signUpWithPassword(email, pass)
      .then(() => navio.stacks.push("Verification"));
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col p-[24] pt-[50]">
      <Form className="flex-1" onSubmit={handleSignUp}>
        <LoaderScreen caption="Loading..." visible={auth.isLoading} />
        <View className="flex-1">
          <Form.Input
            name="email"
            label="Email"
            rules={{
              required: true,
              pattern: {
                value:
                  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}(\s*;\s*[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,})*$/,
                message: "Invalid email addresses",
              },
            }}
            keyboardType="email-address"
            className="flex-1"
          />
          <Form.Input
            name="pass"
            label="Password"
            rules={{ required: true }}
            className="flex-1"
            secureTextEntry
            textContentType="oneTimeCode"
          />
          <Form.Input
            name="passRepeat"
            label="Repeat the password"
            rules={{ required: true }}
            className="flex-1"
            secureTextEntry
            textContentType="oneTimeCode"
          />
        </View>
        <View className="flex-1 items-center justify-end">
          <Text className="text-regular font-light mb-[24]">
            By continuing, you agree to our{" "}
            <Link path="https://google.com">Terms</Link> of{" "}
            <Link path="https://google.com">Service and Privacy</Link> Policy.
          </Text>
          <Form.Submit label="Sign up" />
        </View>
      </Form>
    </SafeAreaView>
  );
});

SignUp.options = {
  title: "Create new account",
};
