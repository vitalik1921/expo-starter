import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { Form, StackProps } from "tamagui";

export interface FormWrapperProps<F extends FieldValues>
  extends Omit<StackProps, "onSubmit"> {
  children?: any;
  methods: UseFormReturn<F>;
  onSubmit?: (payload: F) => void;
}

export function FormWrapper<F extends FieldValues>({
  children,
  methods,
  onSubmit = () => null,
  ...props
}: FormWrapperProps<F>) {
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </Form>
    </FormProvider>
  );
}
