import { observer } from "mobx-react-lite";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native-ui-lib";
import { NavioScreen } from "rn-navio";

import { LoaderScreen, useForm } from "@app/components";
import { navio } from "@app/Navigation";
import { useStores } from "@app/utils/store";

type FormProps = {
  pass: string;
  passRepeat: string;
};

export const UpdatePass: NavioScreen = observer(() => {
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
      navio.N.navigate("Settings");
    });
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col p-[24] pt-[50]">
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

UpdatePass.options = {
  title: "Update password",
};
