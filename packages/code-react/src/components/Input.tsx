import React, { useCallback, useEffect, useRef } from 'react';
import '@uwckit/code-core';

export interface InputProps {
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  hint,
  error,
  disabled,
  required,
  name,
  onChange,
  onBlur,
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleInput = (e: Event) => {
      onChange?.((e as CustomEvent).detail?.value ?? '');
    };
    const handleChange = (e: Event) => {
      onBlur?.((e as CustomEvent).detail?.value ?? '');
    };

    el.addEventListener('uwc-input', handleInput);
    el.addEventListener('uwc-change', handleChange);
    return () => {
      el.removeEventListener('uwc-input', handleInput);
      el.removeEventListener('uwc-change', handleChange);
    };
  }, [onChange, onBlur]);

  return (
    <uwc-input
      ref={ref as any}
      label={label}
      value={value ?? defaultValue ?? ''}
      placeholder={placeholder}
      type={type}
      hint={hint}
      error={error}
      disabled={disabled || undefined}
      required={required || undefined}
      name={name}
    />
  );
};
