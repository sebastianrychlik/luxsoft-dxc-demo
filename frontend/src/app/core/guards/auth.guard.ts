import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * Authentication guard — placeholder.
 *
 * Responsibilities:
 * - Protects routes that require authentication.
 * - Will be wired to an AuthService in a future milestone.
 *
 * Usage:
 *   { path: 'protected', canActivate: [authGuard], ... }
 */
export const authGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);

  // Placeholder: always allow access until AuthService is implemented.
  // Replace with: return authService.isAuthenticated() ? true : router.createUrlTree(['/login']);
  return true;
};
