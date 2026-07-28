import { ErrorHandler, inject, Injectable } from '@angular/core';

/**
 * Global error handler.
 *
 * Responsibilities:
 * - Catches all uncaught Angular errors.
 * - Placeholder for future error reporting (e.g. Sentry, logging service).
 *
 * Register via:
 *   { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
 */
@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: unknown): void {
    // Placeholder: forward to a remote logging/monitoring service in the future.
    console.error('[GlobalErrorHandler]', error);
  }
}
