import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { theme } from '../../styles/theme';

@customElement('ds-input')
export class DsInput extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--ds-spacing-xs);
      }

      label {
        font-family: var(--ds-font-family);
        font-size: var(--ds-font-size-sm);
        color: var(--ds-color-neutral-700);
      }

      input {
        font-family: var(--ds-font-family);
        font-size: var(--ds-font-size-base);
        padding: var(--ds-spacing-sm);
        border: 1px solid var(--ds-color-neutral-300);
        border-radius: var(--ds-radius-md);
        background-color: var(--ds-color-white);
        color: var(--ds-color-neutral-900);
        transition: all 0.2s ease;
      }

      input:focus {
        outline: none;
        border-color: var(--ds-color-primary);
        box-shadow: 0 0 0 2px var(--ds-color-primary-light);
      }

      input:disabled {
        background-color: var(--ds-color-neutral-100);
        cursor: not-allowed;
      }

      .error {
        color: var(--ds-color-primary);
        font-size: var(--ds-font-size-sm);
        margin-top: var(--ds-spacing-xs);
      }
    `
  ];

  @property({ type: String }) label = '';
  @property({ type: String }) type = 'text';
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) error = '';

  render() {
    return html`
      <div class="input-wrapper">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        <input
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          aria-invalid=${Boolean(this.error)}
          aria-describedby=${this.error ? 'error-message' : ''}
        />
        ${this.error ? html`<span id="error-message" class="error">${this.error}</span>` : ''}
      </div>
    `;
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }
}