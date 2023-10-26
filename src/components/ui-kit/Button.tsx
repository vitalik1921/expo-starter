import { useMemo } from "react";

import cn from "classnames";
import { Button as LibButton } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

import { theme } from "@app/utils/theme";

interface ButtonProps {
  label: string;
  link?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
}
export function Button({
  label,
  link = false,
  disabled = false,
  onPress,
  className = "",
}: ButtonProps) {
  const labelColor = useMemo(() => {
    if (disabled) return (theme.colors!.sky as any).dark as string;
    return link
      ? ((theme.colors!.primary as any).base as string)
      : (theme.colors!.white as string);
  }, [link, disabled]);

  return (
    <Bounceable disabled={disabled}>
      <LibButton
        label={label}
        link={link}
        onPress={onPress}
        activeOpacity={1}
        disabled={disabled}
        className={cn(
          {
            "bg-primary-base active:bg-primary-dark": !disabled && !link,
            "bg-sky-light": disabled && !link,
            "h-[48]": !!link,
          },
          className
        )}
        labelStyle={{
          fontSize: theme.fontSize!.regular as unknown as number,
          color: labelColor,
        }}
      />
    </Bounceable>
  );
}
