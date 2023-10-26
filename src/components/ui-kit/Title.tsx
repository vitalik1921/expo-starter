import cn from "classnames";
import { PropsWithChildren } from "react";
import { Text } from "react-native-ui-lib";

interface TitleProps extends PropsWithChildren {
  size?: 1 | 2 | 3;
  className?: string;
}

export function Title({ children, size = 1, className = "" }: TitleProps) {
  return (
    <Text className={cn(`text-title${size} font-bold`, className)}>
      {children}
    </Text>
  );
}
