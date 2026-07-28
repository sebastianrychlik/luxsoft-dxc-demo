import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Dashboard placeholder component.
 *
 * This is a temporary placeholder rendered at the /dashboard route.
 * It will be replaced by the real dashboard feature in a future milestone.
 */
@Component({
  selector: 'app-dashboard-placeholder',
  standalone: true,
  template: `
    <section class="placeholder">
      <h2>Dashboard</h2>
      <p>Feature implementation pending.</p>
    </section>
  `,
  styles: [
    `
      .placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        gap: 0.5rem;
        color: #757575;
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPlaceholderComponent {}
