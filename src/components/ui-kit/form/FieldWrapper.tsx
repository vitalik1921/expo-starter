import React, { FC, ReactNode } from "react";
import { Text, View } from "react-native-ui-lib";

interface FieldWrapperProps {
  error?: string;
  children: ReactNode;
}

export const FieldWrapper: FC<FieldWrapperProps> = ({ error, children }) => {
  return (
    <View className="relative">
      {children}
      {error && <Text className="text-red-base">{error}</Text>}
    </View>
  );
};
