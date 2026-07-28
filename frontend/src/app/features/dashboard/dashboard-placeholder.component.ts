import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthService } from '../../core/services/health.service';
import { HealthResponse } from '../../core/models/health-response.model';

/** Discriminated union representing all possible UI states. */
type HealthViewState =
  | { status: 'loading' }
  | { status: 'success'; data: HealthResponse }
  | { status: 'error'; message: string };

/**
 * Dashboard component.
 *
 * Displays backend health status retrieved from GET /api/health.
 * Models loading, success, and error states explicitly.
 * Uses signals for reactive state management without a state library.
 */
@Component({
  selector: 'app-dashboard-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="dashboard">
      <h2 class="dashboard__title">Dashboard</h2>

      @if (viewState().status === 'loading') {
        <p class="dashboard__status dashboard__status--loading">
          Backend status: checking…
        </p>
      }

      @if (viewState().status === 'success') {
        <p class="dashboard__status dashboard__status--available">
          Backend status: available
        </p>
        <dl class="dashboard__details">
          <dt>Application</dt>
          <dd>{{ asSuccess(viewState()).data.application }}</dd>
          <dt>Version</dt>
          <dd>{{ asSuccess(viewState()).data.version }}</dd>
          <dt>Status</dt>
          <dd>{{ asSuccess(viewState()).data.status }}</dd>
        </dl>
      }

      @if (viewState().status === 'error') {
        <p class="dashboard__status dashboard__status--unavailable">
          Backend status: unavailable
        </p>
        <p class="dashboard__error-message">
          {{ asError(viewState()).message }}
        </p>
        <button class="dashboard__retry" (click)="load()">Retry</button>
      }
    </section>
  `,
  styles: [
    `
      .dashboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        gap: 0.75rem;
        text-align: center;
      }

      .dashboard__title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .dashboard__status {
        font-size: 1.1rem;
        font-weight: 500;
      }

      .dashboard__status--loading {
        color: #757575;
      }

      .dashboard__status--available {
        color: #2e7d32;
      }

      .dashboard__status--unavailable {
        color: #c62828;
      }

      .dashboard__details {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0.25rem 1rem;
        text-align: left;
        color: #424242;
      }

      .dashboard__details dt {
        font-weight: 600;
      }

      .dashboard__error-message {
        color: #757575;
        font-size: 0.9rem;
        max-width: 30rem;
      }

      .dashboard__retry {
        margin-top: 0.5rem;
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        cursor: pointer;
        border: 1px solid #1565c0;
        border-radius: 4px;
        background: #fff;
        color: #1565c0;
      }

      .dashboard__retry:hover {
        background: #e3f2fd;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPlaceholderComponent implements OnInit {
  private readonly healthService = inject(HealthService);

  readonly viewState = signal<HealthViewState>({ status: 'loading' });

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.viewState.set({ status: 'loading' });
    this.healthService.getHealth().subscribe({
      next: (data) => this.viewState.set({ status: 'success', data }),
      error: (err: unknown) => {
        const message =
          err instanceof Error ? err.message : 'Unable to reach the backend.';
        this.viewState.set({ status: 'error', message });
      },
    });
  }

  /** Narrows a state to the success variant for template access. */
  asSuccess(state: HealthViewState): Extract<HealthViewState, { status: 'success' }> {
    return state as Extract<HealthViewState, { status: 'success' }>;
  }

  /** Narrows a state to the error variant for template access. */
  asError(state: HealthViewState): Extract<HealthViewState, { status: 'error' }> {
    return state as Extract<HealthViewState, { status: 'error' }>;
  }
}
