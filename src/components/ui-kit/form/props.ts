import { ReactNode } from "react";

import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  Validate,
} from "react-hook-form";

interface FormFieldClasses {
  container: string;
  label: string;
  asterisk: string;
  input: string;
  helperText: string;
}

// front facing rules type where "required" is unused
export type FormFieldValidation<V extends any = any> = Record<
  string,
  Validate<V, any>
>;
export type FormFieldRules<F extends FieldValues, V extends any = any> = Omit<
  RegisterOptions<F, FieldPath<F>>,
  "required" | "validate"
> & { validate?: FormFieldValidation<V> };

export interface FormFieldProps<F extends FieldValues = FieldValues> {
  name: FieldPath<F>;
  rules?: FormFieldRules<F> &
    Pick<RegisterOptions<F, FieldPath<F>>, "required">;
  label?: string;
  mandatory?: boolean;
  helperText?: ReactNode;
  classes?: Partial<FormFieldClasses>;
  className?: string;
}
