import { observer } from "mobx-react-lite";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import { Button, LoaderScreen, useForm } from "@app/components";
import { useStores } from "@app/utils/store";
import { useState } from "react";

interface FormProps {
  email: string;
}

export const ResetPass: NavioScreen = observer(() => {
  const { Form } = useForm<FormProps>();
  const { auth } = useStores();
  const [passReset, setPassReset] = useState<boolean>(false);

  const handleReset = ({ email }: FormProps) => {
    auth.resetPass(email).then(() => setPassReset(true));
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col p-[24] pt-[50]">
      {passReset && (
        <View className="flex-1 items-center justify-center">
          <Text className="text-center mb-5">
            Your email has been reset. Please review your inbox to proceed.
          </Text>
          <Button path="Login" label="Ok" />
        </View>
      )}
      {!passReset && (
        <Form className="flex-1" onSubmit={handleReset}>
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
          </View>
          <View className="flex-1 items-center justify-end">
            <Form.Submit label="Reset password" />
          </View>
        </Form>
      )}
    </SafeAreaView>
  );
});

ResetPass.options = {
  title: "Reset password",
};
