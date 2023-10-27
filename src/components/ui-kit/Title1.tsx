import { PropsWithChildren } from "react";

import cn from "classnames";
import { Text } from "react-native-ui-lib";

interface TitleProps extends PropsWithChildren {
  className?: string;
}

export function Title1({ children, className = "" }: TitleProps) {
  return (
    <Text className={cn(`text-title1 font-bold`, className)}>{children}</Text>
  );
}
