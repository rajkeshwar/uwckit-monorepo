import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element uwc-input
 * @description Text input component
 * @fires uwc-input - Fired on value change
 * @fires uwc-change - Fired on blur with final value
 */
@customElement('uwc-input')
export class UwcInput extends LitElement {
  static styles = css`
    :host { display: block; }

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    }

    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: #374151;
    }

    .input-wrap {
      position: relative;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      padding: 0.5rem 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 0.375rem;
      font-size: 0.9375rem;
      color: #111827;
      background: #fff;
      outline: none;
      transition: border-color 0.15s, box-shadow 0.15s;
      box-sizing: border-box;
    }

    input::placeholder { color: #9ca3af; }

    input:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }

    input:disabled {
      background: #f9fafb;
      color: #9ca3af;
      cursor: not-allowed;
    }

    input.error {
      border-color: #dc2626;
    }

    input.error:focus {
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
    }

    .hint {
      font-size: 0.8125rem;
      color: #6b7280;
    }

    .error-msg {
      font-size: 0.8125rem;
      color: #dc2626;
    }
  `;

  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) type = 'text';
  @property({ type: String }) hint = '';
  @property({ type: String }) error = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) name = '';

  private _onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('uwc-input', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  private _onChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.dispatchEvent(new CustomEvent('uwc-change', { detail: { value: input.value }, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.label ? html`<label for="input">${this.label}${this.required ? html` <span aria-hidden="true">*</span>` : ''}</label>` : ''}
        <div class="input-wrap">
          <input
            id="input"
            type=${this.type}
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?required=${this.required}
            name=${this.name}
            class=${this.error ? 'error' : ''}
            @input=${this._onInput}
            @change=${this._onChange}
            aria-describedby=${this.hint ? 'hint' : this.error ? 'error' : ''}
            aria-invalid=${this.error ? 'true' : 'false'}
          />
        </div>
        ${this.hint && !this.error ? html`<p class="hint" id="hint">${this.hint}</p>` : ''}
        ${this.error ? html`<p class="error-msg" id="error" role="alert">${this.error}</p>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uwc-input': UwcInput;
  }
}
