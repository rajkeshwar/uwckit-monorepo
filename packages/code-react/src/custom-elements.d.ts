// Extend JSX IntrinsicElements to allow uwc-* custom elements
import type { ButtonVariant, ButtonSize, BadgeVariant } from '@uwckit/code-core';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'uwc-button': React.HTMLAttributes<HTMLElement> & {
        variant?: ButtonVariant;
        size?: ButtonSize;
        disabled?: boolean;
        loading?: boolean;
        type?: 'button' | 'submit' | 'reset';
        'onUwc-click'?: (e: Event) => void;
        ref?: any;
      };
      'uwc-badge': React.HTMLAttributes<HTMLElement> & {
        variant?: BadgeVariant;
        dot?: boolean;
      };
      'uwc-card': React.HTMLAttributes<HTMLElement> & {
        hoverable?: boolean;
      };
      'uwc-input': React.HTMLAttributes<HTMLElement> & {
        label?: string;
        value?: string;
        placeholder?: string;
        type?: string;
        hint?: string;
        error?: string;
        disabled?: boolean;
        required?: boolean;
        name?: string;
        'onUwc-input'?: (e: CustomEvent) => void;
        'onUwc-change'?: (e: CustomEvent) => void;
        ref?: any;
      };
    }
  }
}

export {};
