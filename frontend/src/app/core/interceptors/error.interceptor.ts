import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

/**
 * Error HTTP interceptor.
 *
 * Responsibilities:
 * - Catches HTTP errors and normalises them for the application.
 * - Placeholder for global error handling (e.g. 401 redirect, toast notifications).
 *
 * Registered in app.config.ts via withInterceptors([errorInterceptor]).
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse) {
        // Placeholder: handle specific status codes (401, 403, 500, etc.)
        console.error(`[ErrorInterceptor] HTTP ${error.status}: ${error.message}`);
      }
      return throwError(() => error);
    })
  );
};
