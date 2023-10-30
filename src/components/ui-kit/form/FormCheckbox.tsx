import React from "react";

import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Checkbox, Text, View } from "react-native-ui-lib";

interface FormCheckboxProps<F extends FieldValues> {
  name: string;
  label: string;
  rules?: Record<string, any>;
  defaultChecked?: boolean;
}

export function FormCheckbox<F extends FieldValues>({
  name,
  label,
  rules,
  defaultChecked = false,
}: FormCheckboxProps<F>) {
  const { control } = useFormContext();

  if (!control) {
    throw new Error(
      "FormCheckbox must be used within a Form component with onSubmit handler."
    );
  }

  return (
    <Controller
      control={control as Control<FieldValues>}
      name={name}
      rules={rules}
      defaultValue={defaultChecked}
      render={({ field }) => (
        <View className="flex flex-row items-center">
          <Checkbox
            value={field.value}
            onValueChange={field.onChange}
            color="#6495ED"
          />
          <Text>{label}</Text>
        </View>
      )}
    />
  );
}
