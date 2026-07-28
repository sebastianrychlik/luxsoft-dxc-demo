import { Injectable, signal } from '@angular/core';

/**
 * Authentication service — placeholder.
 *
 * Responsibilities:
 * - Manages authentication state.
 * - Will integrate with a backend auth endpoint in a future milestone.
 *
 * Uses Angular signals for reactive state.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _isAuthenticated = signal<boolean>(false);

  readonly isAuthenticated = this._isAuthenticated.asReadonly();

  // Placeholder methods — implementation in future milestone.
  login(_credentials: { username: string; password: string }): void {
    // TODO: implement in authentication milestone
  }

  logout(): void {
    this._isAuthenticated.set(false);
  }
}
