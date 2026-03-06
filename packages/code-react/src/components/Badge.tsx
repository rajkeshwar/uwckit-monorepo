import React from 'react';
import type { BadgeVariant } from '@uwckit/code-core';
import '@uwckit/code-core';

export interface BadgeProps {
  variant?: BadgeVariant;
  dot?: boolean;
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  dot = false,
  children,
}) => (
  <uwc-badge variant={variant} dot={dot || undefined}>
    {children}
  </uwc-badge>
);
