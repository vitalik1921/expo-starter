import React, { FC, ReactNode } from "react";
import { Text, View } from "react-native-ui-lib";

type FieldWrapperProps = {
  error?: string;
  children: ReactNode;
};

export const FieldWrapper: FC<FieldWrapperProps> = ({ error, children }) => {
  return (
    <View>
      {children}
      {error && <Text className="text-red-base">{error}</Text>}
    </View>
  );
};
