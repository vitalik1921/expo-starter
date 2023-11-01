import { PropsWithChildren } from "react";

import cn from "classnames";
import { Text } from "react-native-ui-lib";

type TitleProps = {
  className?: string;
} & PropsWithChildren;

export function Title3({ children, className = "" }: TitleProps) {
  return (
    <Text className={cn(`text-title3 font-bold`, className)}>{children}</Text>
  );
}
