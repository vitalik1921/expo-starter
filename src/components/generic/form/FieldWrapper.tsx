import React, { FC, ReactNode } from "react";

interface FieldWrapperProps {
  label?: string;
  error?: string;
  children: ReactNode;
}

export const FieldWrapper: FC<FieldWrapperProps> = ({
  label,
  error,
  children,
}) => {
  return (
    <Stack position="relative">
      <XStack>{label && <Text>{label}</Text>}</XStack>
      {children}
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </Stack>
  );
};
