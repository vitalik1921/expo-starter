import cn from "classnames";
import { Button as LibButton, View } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

import { theme } from "@app/utils/theme";

interface ButtonProps {
  label: string;
  variant?: keyof typeof variants;
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
}

export function Button({
  label,
  variant = "base",
  disabled = false,
  onPress,
  className = "",
}: ButtonProps) {
  const isLink = variant === "link";
  const { buttonClasses, labelColor } = variants[variant];

  return (
    <View className={className}>
      <Bounceable disabled={disabled}>
        <LibButton
          label={label}
          link={isLink}
          onPress={onPress}
          activeOpacity={1}
          disabled={disabled}
          className={cn(buttonClasses, {
            "bg-sky-light": disabled && !isLink,
            "h-[48]": !!isLink,
          })}
          labelStyle={{
            fontSize: parseInt(theme.fontSize.regular),
            color: disabled ? theme.colors.sky.dark : labelColor,
          }}
        />
      </Bounceable>
    </View>
  );
}

const variants = {
  base: {
    buttonClasses: "bg-primary-base active:bg-primary-dark",
    labelColor: theme.colors.white,
  },
  link: {
    buttonClasses: "",
    labelColor: theme.colors.primary.base,
  },
  start: {
    buttonClasses: "bg-white",
    labelColor: theme.colors.ink.darkest,
  },
};
