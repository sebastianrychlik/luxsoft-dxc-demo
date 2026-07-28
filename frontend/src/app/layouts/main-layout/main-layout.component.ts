import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Main layout component.
 *
 * Responsibilities:
 * - Wraps feature pages in the primary application layout shell.
 * - Will contain: header, navigation, main content area, footer.
 *
 * Layout structure will be implemented in a dedicated layout milestone.
 */
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="main-layout">
      <!-- Header placeholder -->
      <!-- Navigation placeholder -->
      <main class="main-layout__content">
        <router-outlet />
      </main>
      <!-- Footer placeholder -->
    </div>
  `,
  styles: [
    `
      .main-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .main-layout__content {
        flex: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
