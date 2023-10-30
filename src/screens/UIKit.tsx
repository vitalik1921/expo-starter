import { useForm } from "@app/components/ui-kit/form";
import { SafeAreaView } from "react-native-safe-area-context";

interface FormState {
  field: string;
  checkboxState: boolean;
}

export function UIKit() {
  const { Form } = useForm<FormState>({
    defaultValues: {
      field: "",
      checkboxState: true,
    },
  });

  const handleSubmit = (state: FormState) => {
    console.warn(state);
  };

  return (
    <SafeAreaView className="flex flex-1 relative mt-[100]">
      <Form onSubmit={handleSubmit}>
        <Form.Input label="Test" name="field" rules={{ required: true }} />
        <Form.Checkbox label="Test" name="checkboxState" />
        <Form.Submit label="Submit" />
      </Form>
    </SafeAreaView>
  );
}
