import { FC, useContext } from "react";

import { useFormContext } from "react-hook-form";

import { Button, ButtonProps } from "@/components";

import { FormContext } from "./FormWrapper";

export const FormSubmit: FC<ButtonProps> = (buttonProps) => {
  const { submit } = useContext(FormContext);
  const {
    formState: { errors },
  } = useFormContext();

  const hasErrors = Object.keys(errors).length > 0;

  return <Button {...buttonProps} disabled={hasErrors} onPress={submit} />;
};
