import { useState } from "react";

import cn from "classnames";
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { TextField } from "react-native-ui-lib";

import { theme } from "@/utils/theme";

type InputProps = {
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  value: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  className?: string;
}

export function Input({
  label = "",
  value,
  keyboardType,
  secureTextEntry = false,
  onChange,
  className = "",
}: InputProps) {
  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const newText = e.nativeEvent.text;
    onChange && onChange(e);
    setHasValue(!!newText);
  };

  return (
    <TextField
      floatingPlaceholder
      placeholder={label}
      value={value}
      onChange={handleChange}
      keyboardType={keyboardType}
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
