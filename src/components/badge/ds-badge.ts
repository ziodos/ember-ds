import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { theme } from '../../styles/theme';

@customElement('ds-badge')
export class DsBadge extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: inline-flex;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        padding: var(--ds-spacing-xs) var(--ds-spacing-sm);
        border-radius: var(--ds-radius-full);
        font-size: var(--ds-font-size-xs);
        font-weight: 500;
        line-height: 1;
        white-space: nowrap;
      }

      /* Variants */
      .primary {
        background-color: var(--ds-color-primary);
        color: var(--ds-color-white);
      }

      .secondary {
        background-color: var(--ds-color-neutral-200);
        color: var(--ds-color-neutral-800);
      }

      .outline {
        background-color: transparent;
        border: 1px solid var(--ds-color-primary);
        color: var(--ds-color-primary);
      }
    `
  ];

  @property({ type: String }) variant: 'primary' | 'secondary' | 'outline' = 'primary';

  render() {
    return html`
      <span class="badge ${this.variant}">
        <slot></slot>
      </span>
    `;
  }
}