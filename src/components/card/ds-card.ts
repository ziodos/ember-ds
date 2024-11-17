import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { theme } from '../../styles/theme';

@customElement('ds-card')
export class DsCard extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
      }

      .card {
        background-color: var(--ds-color-white);
        border-radius: var(--ds-radius-lg);
        box-shadow: var(--ds-shadow-md);
        padding: var(--ds-spacing-lg);
        transition: box-shadow 0.2s ease;
      }

      .card:hover {
        box-shadow: var(--ds-shadow-lg);
      }

      .card-header {
        margin-bottom: var(--ds-spacing-md);
      }

      .card-title {
        font-size: var(--ds-font-size-xl);
        font-weight: 600;
        color: var(--ds-color-neutral-900);
        margin: 0;
      }

      .card-subtitle {
        font-size: var(--ds-font-size-sm);
        color: var(--ds-color-neutral-600);
        margin: var(--ds-spacing-xs) 0 0 0;
      }

      .card-content {
        color: var(--ds-color-neutral-700);
      }

      .card-footer {
        margin-top: var(--ds-spacing-md);
        padding-top: var(--ds-spacing-md);
        border-top: 1px solid var(--ds-color-neutral-200);
      }
    `
  ];

  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';

  render() {
    return html`
      <div class="card">
        ${this.title || this.subtitle ? html`
          <div class="card-header">
            ${this.title ? html`<h3 class="card-title">${this.title}</h3>` : ''}
            ${this.subtitle ? html`<p class="card-subtitle">${this.subtitle}</p>` : ''}
          </div>
        ` : ''}
        <div class="card-content">
          <slot></slot>
        </div>
        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}