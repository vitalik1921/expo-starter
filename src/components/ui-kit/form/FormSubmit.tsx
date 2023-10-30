import { FC, useContext } from "react";

import { useFormContext } from "react-hook-form";

import { Button } from "@app/components";

import { FormContext } from "./FormWrapper";

interface FormSubmitProps {
  label: string;
}

export const FormSubmit: FC<FormSubmitProps> = ({ label }) => {
  const { submit } = useContext(FormContext);
  const {
    formState: { errors },
  } = useFormContext();

  const hasErrors = Object.keys(errors).length > 0;

  return <Button label={label} disabled={hasErrors} onPress={submit} />;
};
