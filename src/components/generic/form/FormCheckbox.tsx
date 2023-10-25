import React from "react";

import Checkbox from "expo-checkbox";
import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Label, XStack } from "tamagui";

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
  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!control) {
    throw new Error(
      "FormCheckbox must be used within a Form component with onSubmit handler."
    );
  }

  const errorMessage = errors[name]?.message?.toString();

  return (
    <Controller
      control={control as Control<FieldValues>}
      name={name}
      rules={rules}
      defaultValue={defaultChecked}
      render={({ field }) => (
        <XStack alignItems="center" space="$4">
          <Checkbox
            value={field.value}
            onValueChange={field.onChange}
            color="#6495ED"
          />
          <Label size="$4">{label}</Label>
        </XStack>
      )}
    />
  );
}
