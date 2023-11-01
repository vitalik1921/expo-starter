import { PropsWithChildren } from "react";

import cn from "classnames";
import { Text } from "react-native-ui-lib";

type TitleProps = {
  className?: string;
} & PropsWithChildren;

export function Title2({ children, className = "" }: TitleProps) {
  return (
    <Text className={cn(`text-title2 font-bold`, className)}>{children}</Text>
  );
}
