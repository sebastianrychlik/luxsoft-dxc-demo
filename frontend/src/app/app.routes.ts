import { Routes } from '@angular/router';

/**
 * Application root routes.
 *
 * Architecture:
 * - All feature routes use lazy loading via loadChildren.
 * - Each feature module lives under src/app/features/<feature-name>/.
 * - Layout wrappers can be applied per route group.
 *
 * Future routes will be added here as features are implemented.
 */
export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    // Placeholder: lazy-load the dashboard feature when implemented
    // loadChildren: () =>
    //   import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    loadComponent: () =>
      import('./features/dashboard/dashboard-placeholder.component').then(
        (m) => m.DashboardPlaceholderComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
