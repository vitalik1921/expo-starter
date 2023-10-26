import React, { useMemo } from "react";

import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { InputProps, Stack, styled, TextArea } from "tamagui";

import { FieldWrapper } from "./FieldWrapper";
import { FormFieldProps } from "./props";

interface FormTextareaProps<F extends FieldValues>
  extends FormFieldProps<F>,
    Omit<InputProps, "name"> {}

export function FormTextarea<F extends FieldValues>({
  name,
  rules,
  label,
  ...rest
}: FormTextareaProps<F>) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!control) {
    throw new Error(
      "FormTextarea must be used within a Form component with onSubmit handler."
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
    <Container>
      <Controller
        control={control as Control<FieldValues>}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <FieldWrapper label={label} error={errorMessage}>
            <TextArea onChangeText={onChange} value={value} {...rest} />
          </FieldWrapper>
        )}
      />
    </Container>
  );
}

const Container = styled(Stack, { marginBottom: "$2" });
