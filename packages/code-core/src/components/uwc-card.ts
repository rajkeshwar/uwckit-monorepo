import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element uwc-card
 * @description A flexible card container
 * @slot header - Card header slot
 * @slot footer - Card footer slot
 * @slot default - Card body content
 */
@customElement('uwc-card')
export class UwcCard extends LitElement {
  static styles = css`
    :host { display: block; }

    .card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.07);
      transition: box-shadow 0.2s ease;
    }

    :host([hoverable]) .card:hover {
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      transform: translateY(-1px);
    }

    .header {
      padding: 1rem 1.25rem;
      border-bottom: 1px solid #f1f5f9;
      font-weight: 600;
      font-size: 1rem;
      color: #0f172a;
    }

    .body {
      padding: 1.25rem;
      color: #374151;
    }

    .footer {
      padding: 0.75rem 1.25rem;
      border-top: 1px solid #f1f5f9;
      background: #f8fafc;
    }

    .header:empty, .footer:empty {
      display: none;
    }
  `;

  @property({ type: Boolean, reflect: true }) hoverable = false;

  render() {
    return html`
      <div class="card">
        <div class="header"><slot name="header"></slot></div>
        <div class="body"><slot></slot></div>
        <div class="footer"><slot name="footer"></slot></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uwc-card': UwcCard;
  }
}
