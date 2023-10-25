import React, { ReactNode, useMemo } from "react";

import { Controller, FieldValues, useFormContext } from "react-hook-form";
import QuillEditor, { QuillToolbar } from "react-native-cn-quill";
import { InputProps, ScrollView, Stack, styled } from "tamagui";

import { FieldWrapper } from "./FieldWrapper";
import { FormFieldProps } from "./props";

interface FormRTFInputProps<F extends FieldValues>
  extends FormFieldProps<F>,
    Omit<InputProps, "name"> {
  endAdornment?: ReactNode;
  onEndAdornmentPress?: () => void;
}

export function FormRTFInput<F extends FieldValues>({
  name,
  rules,
  label,
  ...rest
}: FormRTFInputProps<F>) {
  const richText = React.useRef<QuillEditor | null>(null);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!control) {
    throw new Error(
      "FormRTFInput must be used within a Form component with onSubmit handler."
    );
  }

  const errorMessage = useMemo((): string => {
    if (!errors[name]) return "";
    if (errors[name]?.type === "required") {
      return `"${name}" is required`;
    } else {
      return errors[name]?.message?.toString() || "Unknown error";
    }
  }, [errors[name]]);

  return (
    <Container>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <Stack>
            <ScrollView>
              <FieldWrapper label={label} error={errorMessage}>
                <Stack
                  borderTopRightRadius={"$5"}
                  borderTopLeftRadius={"$5"}
                  overflow="hidden"
                >
                  <QuillEditor
                    style={{ height: 200 }}
                    autoSize={true}
                    onHtmlChange={(res) => field.onChange(res.html)}
                    ref={richText}
                  />
                </Stack>
              </FieldWrapper>
            </ScrollView>
            <QuillToolbar
              editor={richText}
              theme="light"
              styles={{
                toolbar: {
                  provider: (provided) => ({
                    ...provided,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                  }),
                  root: (provided) => ({
                    ...provided,
                    top: -1,
                    backgroundColor: "white",
                    width: "100%",
                  }),
                },
              }}
              options={[
                ["bold", "italic", "underline", "strike"], // toggled buttons
                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: "ordered" }, { list: "bullet" }],
              ]}
            />
          </Stack>
        )}
      />
    </Container>
  );
}

const Container = styled(Stack, {
  marginBottom: "$2",
});
