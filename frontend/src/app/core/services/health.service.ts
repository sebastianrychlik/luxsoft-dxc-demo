import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { HealthResponse } from '../models/health-response.model';

/**
 * Health service.
 *
 * Responsibilities:
 * - Calls the backend health endpoint through ApiService.
 * - Exposes a typed Observable<HealthResponse>.
 * - Contains no component-specific state or DOM/UI logic.
 *
 * Endpoint: GET /api/health
 */
@Injectable({ providedIn: 'root' })
export class HealthService {
  private readonly api = inject(ApiService);

  /**
   * Fetches the current backend health status.
   * The path is relative; ApiService prepends the configured base URL.
   */
  getHealth(): Observable<HealthResponse> {
    return this.api.get<HealthResponse>('/health');
  }
}
