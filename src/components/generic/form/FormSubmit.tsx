import { FC, PropsWithChildren } from "react";

import { useFormContext } from "react-hook-form";
import { Button, Form } from "tamagui";

export const FormSubmit: FC<PropsWithChildren> = ({ children }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <Form.Trigger asChild alignContent="center" alignItems="center">
      <Button disabled={hasErrors} opacity={hasErrors ? 0.5 : 1}>
        {children}
      </Button>
    </Form.Trigger>
  );
};
