import { useForm } from "@app/components/ui-kit/form";
import { SafeAreaView } from "react-native-safe-area-context";

type FormState = {
  field1: string;
  field2: string;
  field3: string;
  checkboxState: boolean;
};

export function UIKit() {
  const { Form } = useForm<FormState>({
    defaultValues: {
      field1: "",
      field2: "",
      field3: "",
      checkboxState: true,
    },
  });

  const handleSubmit = (state: FormState) => {
    console.warn(state);
  };

  return (
    <SafeAreaView className="flex flex-1 relative mt-[100]">
      <Form onSubmit={handleSubmit}>
        <Form.Input label="Test" name="field1" rules={{ required: true }} />
        <Form.Input label="Test" name="field2" rules={{ required: true }} />
        <Form.Input label="Test" name="field3" rules={{ required: true }} />
        <Form.Checkbox label="Test" name="checkboxState" />
        <Form.Submit label="Submit" />
      </Form>
    </SafeAreaView>
  );
}
