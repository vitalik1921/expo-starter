import { createContext } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { View, ViewProps } from "react-native-ui-lib";

type FormContextProps = {
  submit: () => void;
};

export const FormContext = createContext<FormContextProps>({
  submit: () => undefined,
});

export type FormWrapperProps<F extends FieldValues> = {
  children?: any;
  methods: UseFormReturn<F>;
  onSubmit?: (payload: F) => void;
} & Omit<ViewProps, "onSubmit">;

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
