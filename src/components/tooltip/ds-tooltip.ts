import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { theme } from '../../styles/theme';

@customElement('ds-tooltip')
export class DsTooltip extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: inline-block;
        position: relative;
      }

      .tooltip-trigger {
        display: inline-block;
        cursor: pointer;
      }

      .tooltip-content {
        position: absolute;
        z-index: 1000;
        background-color: var(--ds-color-neutral-900);
        color: var(--ds-color-white);
        padding: var(--ds-spacing-xs) var(--ds-spacing-sm);
        border-radius: var(--ds-radius-sm);
        font-size: var(--ds-font-size-sm);
        max-width: 200px;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease;
      }

      .tooltip-content.visible {
        opacity: 1;
        visibility: visible;
      }

      /* Positions */
      .tooltip-content.top {
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-8px);
      }

      .tooltip-content.bottom {
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(8px);
      }
    `
  ];

  @property({ type: String }) text = '';
  @property({ type: String }) position: 'top' | 'bottom' = 'top';
  @state() private isVisible = false;

  render() {
    return html`
      <div 
        class="tooltip-trigger"
        @mouseenter=${this._show}
        @mouseleave=${this._hide}
        @focus=${this._show}
        @blur=${this._hide}
      >
        <slot></slot>
        <div class="tooltip-content ${this.position} ${this.isVisible ? 'visible' : ''}">
          ${this.text}
        </div>
      </div>
    `;
  }

  private _show() {
    this.isVisible = true;
  }

  private _hide() {
    this.isVisible = false;
  }
}