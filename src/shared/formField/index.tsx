import { useId } from 'react';
import type { ReactNode } from 'react';
import { useField } from 'formik';
import { Field, Label, Input, Textarea, Select, ErrorText } from './Style';

interface FormFieldProps {
    name: string;
    label: string;
    as?: 'input' | 'textarea' | 'select';
    type?: string;
    placeholder?: string;
    dir?: 'ltr' | 'rtl';
    disabled?: boolean;
    children?: ReactNode;
}

export default function FormField({
    name,
    label,
    as = 'input',
    children,
    ...rest
}: FormFieldProps) {
    const [field, meta] = useField(name);
    const id = useId();
    const hasError = Boolean(meta.touched && meta.error);

    const common = {
        id,
        $invalid: hasError,
        'aria-invalid': hasError,
        'aria-describedby': hasError ? `${id}-error` : undefined,
        ...field,
        ...rest,
    };

    return (
        <Field>
            <Label htmlFor={id}>{label}</Label>
            {as === 'textarea' && <Textarea rows={4} {...common} />}
            {as === 'select' && <Select {...common}>{children}</Select>}
            {as === 'input' && <Input {...common} />}
            {hasError && (
                <ErrorText id={`${id}-error`} role="alert">
                    {meta.error}
                </ErrorText>
            )}
        </Field>
    );
}