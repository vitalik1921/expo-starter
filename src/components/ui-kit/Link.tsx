import cn from "classnames";
import { PropsWithChildren } from "react";
import { Text } from "react-native-ui-lib";
import * as Linking from "expo-linking";
import { navio } from "@app/Navigation";

interface LinkProps extends PropsWithChildren {
  path: string;
  className?: string;
}

export function Link({ path, className, children }: LinkProps) {
  const isUrl = path.startsWith("http");
  const handlePress = () => {
    if (isUrl) {
      Linking.openURL(path);
    } else {
      navio.N.navigate(path);
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
