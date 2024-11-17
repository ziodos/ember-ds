import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { theme } from '../../styles/theme';

@customElement('ds-switch')
export class DsSwitch extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: inline-block;
      }

      .switch {
        display: inline-flex;
        align-items: center;
        gap: var(--ds-spacing-sm);
        cursor: pointer;
      }

      .switch-track {
        position: relative;
        width: 36px;
        height: 20px;
        background-color: var(--ds-color-neutral-300);
        border-radius: var(--ds-radius-full);
        transition: background-color 0.2s ease;
      }

      .switch-thumb {
        position: absolute;
        left: 2px;
        top: 2px;
        width: 16px;
        height: 16px;
        background-color: var(--ds-color-white);
        border-radius: var(--ds-radius-full);
        transition: transform 0.2s ease;
      }

      input:checked + .switch-track {
        background-color: var(--ds-color-primary);
      }

      input:checked + .switch-track .switch-thumb {
        transform: translateX(16px);
      }

      input:disabled + .switch-track {
        opacity: 0.5;
        cursor: not-allowed;
      }

      input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      label {
        font-size: var(--ds-font-size-sm);
        color: var(--ds-color-neutral-700);
      }
    `
  ];

  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) label = '';

  render() {
    return html`
      <label class="switch">
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        >
        <span class="switch-track">
          <span class="switch-thumb"></span>
        </span>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </label>
    `;
  }

  private _handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }
}