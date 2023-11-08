import {
  Button,
  Header1,
  LoaderScreen,
  Title1,
  Title2,
  Title3,
  useForm,
} from "@/components";
import { router } from "expo-router";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, ScrollBar } from "react-native-ui-lib";

type FormProps = {
  checkbox: boolean;
  input: string;
};

export const UiKit = () => {
  const { top } = useSafeAreaInsets();
  const { Form } = useForm<FormProps>();

  return (
    <>
      <Header1
        onRightButtonPress={() => router.push("/profile")}
        style={{ marginTop: top }}
      >
        UI kit
      </Header1>
      <ScrollView className="flex-1 p-[24] pt-0">
        <Text className="mb-2 font-bold italic">Typography</Text>
        <View className="mb-10">
          <Title1>Title 1</Title1>
          <Title2>Title 2</Title2>
          <Title3>Title 3</Title3>
        </View>
        <Text className="my-2 font-bold italic">Buttons</Text>
        <View className="flex-1 items-start">
          <Button variant="base" label="Base" />
          <Button variant="link" label="Link" />
          <Button variant="start" label="Start" className="shadow-sm" />
        </View>
        <Text className="my-2 font-bold italic">Fields</Text>
        <View className="flex-1 items-start">
          <Form>
            <Form.Input name="input" label="Input" className="self-center" />
            <Form.Checkbox label="Checkbox" name="checkbox" />
            <Form.Submit label="Submit button" />
          </Form>
        </View>
        <Text className="my-2 font-bold italic">Loaders</Text>
        <View className="flex-1 items-start">
          <LoaderScreen caption="Loader" visible overlay={false} />
        </View>
      </ScrollView>
    </>
  );
};

export default UiKit;
