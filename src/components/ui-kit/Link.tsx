import { PropsWithChildren } from "react";

import cn from "classnames";
import * as Linking from "expo-linking";
import { Text } from "react-native-ui-lib";

// import { navio } from "@app/Navigation";

type LinkProps = {
  path: string;
  className?: string;
} & PropsWithChildren;

export function Link({ path, className, children }: LinkProps) {
  const handlePress = () => {
    const isUrl = path.startsWith("http");
    if (isUrl) {
      Linking.openURL(path);
    } else {
      // navio.push(path as any);
    }
  };

  return (
    <Text
      className={cn("text-primary-base font-medium", className)}
      onPress={handlePress}
    >
      {children}
    </Text>
  );
}
