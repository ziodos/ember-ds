import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { theme } from '../../styles/theme';

@customElement('ds-modal')
export class DsModal extends LitElement {
  static styles = [
    theme,
    css`
      .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease;
      }

      .modal-backdrop[data-open] {
        opacity: 1;
        visibility: visible;
      }

      .modal {
        background-color: var(--ds-color-white);
        border-radius: var(--ds-radius-lg);
        box-shadow: var(--ds-shadow-lg);
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        transform: translateY(20px);
        transition: transform 0.2s ease;
      }

      .modal-backdrop[data-open] .modal {
        transform: translateY(0);
      }

      .modal-header {
        padding: var(--ds-spacing-md);
        border-bottom: 1px solid var(--ds-color-neutral-200);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .modal-title {
        font-size: var(--ds-font-size-xl);
        font-weight: 600;
        color: var(--ds-color-neutral-900);
        margin: 0;
      }

      .close-button {
        background: none;
        border: none;
        color: var(--ds-color-neutral-500);
        cursor: pointer;
        padding: var(--ds-spacing-xs);
        border-radius: var(--ds-radius-sm);
        transition: background-color 0.2s ease;
      }

      .close-button:hover {
        background-color: var(--ds-color-neutral-100);
      }

      .modal-content {
        padding: var(--ds-spacing-md);
      }

      .modal-footer {
        padding: var(--ds-spacing-md);
        border-top: 1px solid var(--ds-color-neutral-200);
        display: flex;
        justify-content: flex-end;
        gap: var(--ds-spacing-sm);
      }
    `
  ];

  @property({ type: Boolean }) open = false;
  @property({ type: String }) title = '';

  render() {
    return html`
      <div 
        class="modal-backdrop" 
        ?data-open=${this.open}
        @click=${this._handleBackdropClick}
      >
        <div class="modal" @click=${this._stopPropagation}>
          <div class="modal-header">
            <h2 class="modal-title">${this.title}</h2>
            <button 
              class="close-button"
              @click=${this._close}
              aria-label="Close modal"
            >✕</button>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }

  private _handleBackdropClick() {
    this._close();
  }

  private _stopPropagation(e: Event) {
    e.stopPropagation();
  }

  private _close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('close'));
  }
}