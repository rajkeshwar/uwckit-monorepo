import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

/**
 * @element uwc-badge
 * @description Status badge / pill component
 */
@customElement('uwc-badge')
export class UwcBadge extends LitElement {
  static styles = css`
    :host { display: inline-block; }

    span {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.125rem 0.625rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.025em;
      line-height: 1.5;
    }

    span.variant-default  { background: #f1f5f9; color: #475569; }
    span.variant-success  { background: #dcfce7; color: #15803d; }
    span.variant-warning  { background: #fef9c3; color: #a16207; }
    span.variant-error    { background: #fee2e2; color: #b91c1c; }
    span.variant-info     { background: #dbeafe; color: #1d4ed8; }

    .dot {
      width: 0.375rem;
      height: 0.375rem;
      border-radius: 50%;
      background: currentColor;
    }
  `;

  @property({ type: String }) variant: BadgeVariant = 'default';
  @property({ type: Boolean }) dot = false;

  render() {
    return html`
      <span class="variant-${this.variant}">
        ${this.dot ? html`<span class="dot" aria-hidden="true"></span>` : ''}
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uwc-badge': UwcBadge;
  }
}
