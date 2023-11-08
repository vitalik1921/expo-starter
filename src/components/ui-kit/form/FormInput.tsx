import React, { useMemo } from "react";

import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { TextFieldProps } from "react-native-ui-lib";

import { Input } from "@/components";

import { FieldWrapper } from "./FieldWrapper";
import { FormFieldProps } from "./props";

type FormInputProps<F extends FieldValues> = {
  // endAdornment?: ReactNode;
  // onEndAdornmentPress?: () => void;
} & FormFieldProps<F> &
  Omit<TextFieldProps, "name" | "placeholder">;

export function FormInput<F extends FieldValues>({
  name,
  rules,
  label,
  // endAdornment,
  // onEndAdornmentPress,
  ...rest
}: FormInputProps<F>) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!control) {
    throw new Error(
      "FormInput must be used within a Form component with onSubmit handler."
    );
  }

  const errorMessage = useMemo((): string => {
    if (!errors[name]) return "";
    if (errors[name]?.type === "required") {
      return `"${name}" is required`;
    } else {
      return errors[name]?.message?.toString() || "Unknown error";
    }
  }, [errors[name]]);

  return (
    <Controller
      control={control as Control<FieldValues>}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FieldWrapper error={errorMessage}>
          <Input
            label={label}
            value={field.value}
            onChange={(e) => field.onChange(e.nativeEvent.text)}
            onBlur={field.onBlur}
            {...rest}
          />
        </FieldWrapper>
      )}
    />
  );
}
