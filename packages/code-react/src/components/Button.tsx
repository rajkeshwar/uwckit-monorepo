import React, { useCallback } from 'react';
import type { ButtonVariant, ButtonSize } from '@uwckit/code-core';
import '@uwckit/code-core';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: (event: Event) => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  children,
  onClick,
  className,
}) => {
  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;
      const handler = (e: Event) => onClick?.(e);
      node.addEventListener('uwc-click', handler);
      return () => node.removeEventListener('uwc-click', handler);
    },
    [onClick]
  );

  return (
    <uwc-button
      ref={ref as any}
      variant={variant}
      size={size}
      disabled={disabled || undefined}
      loading={loading || undefined}
      type={type}
      className={className}
    >
      {children}
    </uwc-button>
  );
};
