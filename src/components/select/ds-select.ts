import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { theme } from '../../styles/theme';

@customElement('ds-select')
export class DsSelect extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
      }

      .select-wrapper {
        position: relative;
        width: 100%;
      }

      label {
        display: block;
        font-size: var(--ds-font-size-sm);
        color: var(--ds-color-neutral-700);
        margin-bottom: var(--ds-spacing-xs);
      }

      select {
        width: 100%;
        padding: var(--ds-spacing-sm);
        font-family: var(--ds-font-family);
        font-size: var(--ds-font-size-base);
        border: 1px solid var(--ds-color-neutral-300);
        border-radius: var(--ds-radius-md);
        background-color: var(--ds-color-white);
        color: var(--ds-color-neutral-900);
        cursor: pointer;
        appearance: none;
      }

      .select-icon {
        position: absolute;
        right: var(--ds-spacing-sm);
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        color: var(--ds-color-neutral-500);
      }

      select:focus {
        outline: none;
        border-color: var(--ds-color-primary);
        box-shadow: 0 0 0 2px var(--ds-color-primary-light);
      }

      select:disabled {
        background-color: var(--ds-color-neutral-100);
        cursor: not-allowed;
      }

      .error {
        color: var(--ds-color-primary);
        font-size: var(--ds-font-size-sm);
        margin-top: var(--ds-spacing-xs);
      }
    `,
  ];

  @property({ type: String }) label = '';
  @property({ type: Array }) options: Array<{ value: string; label: string }> =
    [];
  @property({ type: String }) value = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) error = '';

  connectedCallback() {
    super.connectedCallback();
    const optionsAttr = this.getAttribute('data-options');
    if (optionsAttr) {
      this.options = JSON.parse(optionsAttr);
    }
  }

  render() {
    return html`
      <div class="select-wrapper">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        <select
          .value=${this.value}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
          aria-invalid=${Boolean(this.error)}
        >
          ${this.options.map(
            (option) => html`
            <option value=${option.value}>${option.label}</option>
          `
          )}
        </select>
        <span class="select-icon">▼</span>
        ${this.error ? html`<span class="error">${this.error}</span>` : ''}
      </div>
    `;
  }

  private _handleChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.value = select.value;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }
}
