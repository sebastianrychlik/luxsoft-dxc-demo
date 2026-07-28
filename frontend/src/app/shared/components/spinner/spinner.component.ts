import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * Reusable loading spinner component.
 *
 * Usage:
 *   <app-spinner />
 *   <app-spinner size="large" />
 *   <app-spinner [visible]="isLoading()" />
 */
@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgClass],
  template: `
    @if (visible()) {
      <div
        class="spinner-container"
        role="status"
        aria-label="Loading"
        [ngClass]="'spinner--' + size()"
      >
        <div class="spinner"></div>
      </div>
    }
  `,
  styles: [
    `
      .spinner-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      }

      .spinner {
        border: 3px solid rgba(0, 0, 0, 0.1);
        border-top-color: #1976d2;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      .spinner--small .spinner  { width: 1rem;   height: 1rem; }
      .spinner--medium .spinner { width: 2rem;   height: 2rem; }
      .spinner--large .spinner  { width: 3.5rem; height: 3.5rem; }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  readonly visible = input<boolean>(true);
  readonly size = input<'small' | 'medium' | 'large'>('medium');
}
