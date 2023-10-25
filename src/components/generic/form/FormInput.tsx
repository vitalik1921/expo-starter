import React, { ReactNode, useMemo } from "react";

import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { Input, InputProps, Stack, styled } from "tamagui";

import { FieldWrapper } from "./FieldWrapper";
import { FormFieldProps } from "./props";

interface FormInputProps<F extends FieldValues>
  extends FormFieldProps<F>,
    Omit<InputProps, "name"> {
  endAdornment?: ReactNode;
  onEndAdornmentPress?: () => void;
}

export function FormInput<F extends FieldValues>({
  name,
  rules,
  label,
  endAdornment,
  onEndAdornmentPress,
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
    <Container>
      <Controller
        control={control as Control<FieldValues>}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, onBlur } }) => (
          <FieldWrapper label={label} error={errorMessage}>
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              paddingRight={endAdornment ? 50 : 0}
              {...rest}
            />
            <EndAdormentContainer>
              <TouchableOpacity onPress={onEndAdornmentPress}>
                {endAdornment}
              </TouchableOpacity>
            </EndAdormentContainer>
          </FieldWrapper>
        )}
      />
    </Container>
  );
}

const Container = styled(Stack, { marginBottom: "$2" });
const EndAdormentContainer = styled(Stack, {
  position: "absolute",
  top: 12,
  right: 15,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  flexShrink: 1,
});
