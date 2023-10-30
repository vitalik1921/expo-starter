import { useMemo } from "react";

import {
  DeepPartial,
  FieldValues,
  Path,
  Resolver,
  ResolverError,
  useForm as useRHFForm,
} from "react-hook-form";

import { FormCheckbox } from "./FormCheckbox";
import { FormInput } from "./FormInput";
import { FormSubmit } from "./FormSubmit";
import { FormWrapper, FormWrapperProps } from "./FormWrapper";

interface UseFormArgs<F extends FieldValues> {
  defaultValues?: DeepPartial<F>;
  validate?: Validation<F>;
  watch?: Path<F>[];
}

export function useForm<F extends FieldValues>(args?: UseFormArgs<F>) {
  const defaultValues = args?.defaultValues,
    watch = args?.watch ?? [],
    resolver = args?.validate ? createResolver(args.validate) : undefined;

  const methods = useRHFForm<F>({
    defaultValues: defaultValues as any,
    resolver,
  });

  const watchList = methods.watch(watch);

  const watched = watch.reduce<Partial<F>>(
    (acc, cur, index) => ({ ...acc, [cur]: watchList[index] }),
    {}
  );

  /**
   * Form component with related input sub-components, typed with the user's given form state type.
   */
  const Form = useMemo(() => {
    function FormComponent({
      children,
      ...props
    }: Omit<FormWrapperProps<F>, "methods">) {
      return (
        <FormWrapper<F> methods={methods} {...props}>
          {children}
        </FormWrapper>
      );
    }

    FormComponent.Input = FormInput<F>;
    FormComponent.Submit = FormSubmit;
    FormComponent.Checkbox = FormCheckbox;

    return FormComponent;
  }, []);

  return {
    Form,
    watched,
    reset: methods.reset,
    setValue: methods.setValue,
    isDirty: methods.formState.isDirty,
    isSubmitting: methods.formState.isSubmitting,
    setFocus: methods.setFocus,
    clearErrors: methods.clearErrors,
  };
}

type Validation<F extends FieldValues> = (
  payload: F
) => Partial<Record<keyof F, string>>;
const type = "required";
function createResolver<F extends FieldValues>(
  validate: Validation<F>
): Resolver<F> {
  return function resolver(values) {
    const validations = validate(values);
    const errors = Object.entries(validations).reduce<
      ResolverError<F>["errors"]
    >((acc, [key, message]) => ({ ...acc, [key]: { type, message } }), {});
    const res: ResolverError<F> = { values, errors };
    return res;
  };
}
