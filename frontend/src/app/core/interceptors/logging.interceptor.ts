import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

/**
 * Logging HTTP interceptor.
 *
 * Responsibilities:
 * - Logs outgoing requests and incoming responses in development.
 * - Placeholder for structured request/response logging.
 *
 * Registered in app.config.ts via withInterceptors([loggingInterceptor]).
 */
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const start = Date.now();

  return next(req).pipe(
    tap({
      next: (event) => {
        const elapsed = Date.now() - start;
        console.debug(`[HTTP] ${req.method} ${req.url} — ${elapsed}ms`, event);
      },
      error: (error: unknown) => {
        console.error(`[HTTP] ${req.method} ${req.url} — ERROR`, error);
      },
    })
  );
};
