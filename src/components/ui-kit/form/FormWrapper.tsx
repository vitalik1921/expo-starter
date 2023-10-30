import { createContext } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { View, ViewProps } from "react-native-ui-lib";

interface FormContextProps {
  submit: () => void;
}

export const FormContext = createContext<FormContextProps>({
  submit: () => undefined,
});

export interface FormWrapperProps<F extends FieldValues>
  extends Omit<ViewProps, "onSubmit"> {
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
      <FormContext.Provider value={{ submit: methods.handleSubmit(onSubmit) }}>
        <View {...props}>{children}</View>
      </FormContext.Provider>
    </FormProvider>
  );
}
