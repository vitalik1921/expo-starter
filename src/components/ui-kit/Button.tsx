import cn from "classnames";
import * as Linking from "expo-linking";
import { Button as LibButton, View } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

import { navio } from "@app/Navigation";
import { theme } from "@app/utils/theme";

interface ButtonProps {
  label: string;
  variant?: keyof typeof variants;
  path?: string;
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
}

export function Button({
  label,
  variant = "base",
  path,
  disabled = false,
  onPress,
  className = "",
}: ButtonProps) {
  const isLink = variant === "link";
  const { buttonClasses, labelColor } = variants[variant];

  const handlePress = () => {
    // HapticService.triggerHaptic(HapticType.impactLight, "test");
    if (path) {
      const isUrl = path.startsWith("http");
      if (isUrl) {
        Linking.openURL(path);
      } else {
        navio.push(path as any);
      }
      return;
    }

    onPress && onPress();
  };

  return (
    <View className={className}>
      <Bounceable disabled={disabled}>
        <LibButton
          label={label}
          link={isLink}
          onPress={handlePress}
          activeOpacity={1}
          disabled={disabled}
          className={cn(buttonClasses, {
            "bg-sky-light": disabled && !isLink,
            "h-[48]": !!isLink,
          })}
          labelStyle={{
            fontSize: parseInt(theme.fontSize.regular),
            fontWeight: "600",
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
