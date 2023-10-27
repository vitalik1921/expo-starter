import { useState } from "react";

import cn from "classnames";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { TextField } from "react-native-ui-lib";
import { theme } from "@app/utils/theme";

interface InputProps {
  label?: string;
  name: string;
  secureTextEntry?: boolean;
  onChange?: (value: any) => void;
  className?: string;
}

export function Input({
  label = "",
  name,
  secureTextEntry = false,
  onChange,
  className = "",
}: InputProps) {
  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const newText = e.nativeEvent.text;
    onChange && onChange(newText);
    setHasValue(!!newText);
  };

  return (
    <TextField
      floatingPlaceholder
      placeholder={label}
      onChange={handleChange}
      className={cn(
        "flex text-regular text-ink-darker h-12 border border-sky-light px-4 py-2 rounded-lg border-solid  focus:border-primary-base focus:border-2 m-0",
        { "pt-[20]": !!hasValue },
        className
      )}
      // @ts-ignore
      floatingPlaceholderStyle={{
        position: "absolute",
        top: hasValue ? 20 : 15,
        fontSize: hasValue ? theme.fontSize.tiny : theme.fontSize.regular,
        left: 18,
      }}
      secureTextEntry={secureTextEntry}
    />
  );
}
