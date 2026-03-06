import React from 'react';
import '@uwckit/code-core';

export interface CardProps {
  hoverable?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverable = false,
  header,
  footer,
  children,
}) => (
  <uwc-card hoverable={hoverable || undefined}>
    {header && <span slot="header">{header}</span>}
    {children}
    {footer && <span slot="footer">{footer}</span>}
  </uwc-card>
);
