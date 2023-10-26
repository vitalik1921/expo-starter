import { FC, PropsWithChildren } from "react";

import { useFormContext } from "react-hook-form";
import { Form, Text } from "tamagui";

export const FormSheetSubmit: FC<PropsWithChildren> = ({ children }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <Form.Trigger asChild alignContent="center" alignItems="center">
      <Text fontSize="$5" fontWeight="600" color="#6495ED" disabled={hasErrors}>
        {children}
      </Text>
    </Form.Trigger>
  );
};
