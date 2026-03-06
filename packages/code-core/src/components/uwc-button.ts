import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * @element uwc-button
 * @description A versatile button component
 * @fires click - Fired when the button is clicked
 */
@customElement('uwc-button')
export class UwcButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: none;
      border-radius: 0.375rem;
      font-family: inherit;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      outline: none;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
    }

    button:focus-visible {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Sizes */
    button.size-sm { padding: 0.375rem 0.75rem; font-size: 0.875rem; height: 2rem; }
    button.size-md { padding: 0.5rem 1rem; font-size: 0.9375rem; height: 2.5rem; }
    button.size-lg { padding: 0.625rem 1.25rem; font-size: 1rem; height: 3rem; }

    /* Variants */
    button.variant-primary {
      background: #2563eb;
      color: #fff;
    }
    button.variant-primary:hover { background: #1d4ed8; }
    button.variant-primary:active { background: #1e40af; }

    button.variant-secondary {
      background: #f1f5f9;
      color: #0f172a;
      border: 1px solid #e2e8f0;
    }
    button.variant-secondary:hover { background: #e2e8f0; }

    button.variant-danger {
      background: #dc2626;
      color: #fff;
    }
    button.variant-danger:hover { background: #b91c1c; }

    button.variant-ghost {
      background: transparent;
      color: #374151;
    }
    button.variant-ghost:hover { background: #f3f4f6; }

    /* Loading spinner */
    .spinner {
      width: 1em;
      height: 1em;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  @property({ type: String }) variant: ButtonVariant = 'primary';
  @property({ type: String }) size: ButtonSize = 'md';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';

  private _handleClick(e: MouseEvent) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent('uwc-click', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <button
        class="variant-${this.variant} size-${this.size}"
        ?disabled=${this.disabled || this.loading}
        type=${this.type}
        @click=${this._handleClick}
        aria-busy=${this.loading}
      >
        ${this.loading ? html`<span class="spinner" aria-hidden="true"></span>` : ''}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uwc-button': UwcButton;
  }
}
