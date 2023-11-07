import { Stack } from "expo-router";
import { observer } from "mobx-react-lite";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";

import { Button, Link, LoaderScreen, useForm } from "@app/components";
import { useStores } from "@app/utils/store";

type FormProps = {
  email: string;
  pass: string;
};

export const Login = observer(() => {
  const { Form } = useForm<FormProps>();
  const { auth } = useStores();

  const handleLogin = ({ email, pass }: FormProps) => {
    auth.signInWithPassword(email, pass);
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col p-[24] pt-[50]">
      <Stack.Screen
        options={{
          headerTitle: "Login",
        }}
      />
      <Form className="flex-1" onSubmit={handleLogin}>
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
          />
          <Button
            variant="link"
            label="Forgot password?"
            className="self-start"
            path="/auth/reset-pass"
          />
        </View>
        <View className="flex-1 items-center justify-end">
          <Text className="text-regular font-light mb-[24]">
            By continuing, you agree to our{" "}
            <Link path="https://google.com">Terms of Service</Link> and{" "}
            <Link path="https://google.com">Privacy Policy</Link>.
          </Text>
          <Form.Submit label="Login" />
        </View>
      </Form>
    </SafeAreaView>
  );
});

export default Login;
