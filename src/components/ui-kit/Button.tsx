import { theme } from "@app/utils/theme";
import { Button as LibButton } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";
import cn from "classnames";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
}
export function Button({
  label,
  disabled = false,
  onPress,
  className = "",
}: ButtonProps) {
  return (
    <Bounceable disabled={disabled}>
      <LibButton
        label={label}
        onPress={onPress}
        activeOpacity={1}
        disabled={disabled}
        className={cn(
          {
            "bg-primary-base active:bg-primary-dark": !disabled,
            "bg-sky-light": disabled,
          },
          className
        )}
        labelStyle={{
          fontSize: parseInt(theme.fontSize!.regular as string),
          color: disabled
            ? ((theme.colors!.sky as any).dark as string)
            : (theme.colors!.white as string),
        }}
      />
    </Bounceable>
  );
}
