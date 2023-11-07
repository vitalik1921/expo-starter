import { observer } from "mobx-react-lite";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native-ui-lib";

import { LoaderScreen, useForm } from "@/components";
import { router, Stack } from "expo-router";
import { useStores } from "@/utils/store";

type FormProps = {
  pass: string;
  passRepeat: string;
};

export const UpdatePass = observer(() => {
  const { Form } = useForm<FormProps>();
  const { auth } = useStores();

  const handleUpdate = ({ pass, passRepeat }: FormProps) => {
    if (pass !== passRepeat) {
      Alert.alert(
        "Passwords entered do not match. Please ensure they are the same."
      );
      return;
    }
    auth.updatePass(pass).then(() => {
      console.warn("we here");
      router.push("/profile");
    });
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col p-[24] p-[50]">
      <Stack.Screen options={{ headerTitle: "Update password" }} />
      <Form className="flex-1" onSubmit={handleUpdate}>
        <LoaderScreen caption="Loading..." visible={auth.isLoading} />
        <View className="flex-1">
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
          <Form.Submit label="Change password" />
        </View>
      </Form>
    </SafeAreaView>
  );
});

export default UpdatePass;
