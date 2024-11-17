import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { theme } from '../../styles/theme';

@customElement('ds-button')
export class DsButton extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: inline-block;
      }

      button {
        font-family: var(--ds-font-family);
        font-size: var(--ds-font-size-base);
        padding: var(--ds-spacing-sm) var(--ds-spacing-md);
        border-radius: var(--ds-radius-md);
        border: none;
        cursor: pointer;
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--ds-spacing-sm);
        min-height: 2.5rem;
      }

      /* Variants */
      button.primary {
        background-color: var(--ds-color-primary);
        color: var(--ds-color-white);
      }

      button.primary:hover:not(:disabled) {
        background-color: var(--ds-color-primary-hover);
      }

      button.secondary {
        background-color: var(--ds-color-neutral-100);
        color: var(--ds-color-neutral-900);
      }

      button.secondary:hover:not(:disabled) {
        background-color: var(--ds-color-neutral-200);
      }

      button.outlined {
        background-color: transparent;
        border: 2px solid var(--ds-color-primary);
        color: var(--ds-color-primary);
      }

      button.outlined:hover:not(:disabled) {
        background-color: var(--ds-color-primary-light);
      }

      /* Disabled state */
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `
  ];

  @property({ type: String }) variant: 'primary' | 'secondary' | 'outlined' = 'primary';
  @property({ type: Boolean }) disabled = false;

  render() {
    return html`
      <button 
        class=${this.variant}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
  }
}