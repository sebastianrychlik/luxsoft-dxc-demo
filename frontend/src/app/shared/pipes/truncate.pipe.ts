import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncate pipe.
 *
 * Truncates a string to a given length and appends an ellipsis.
 *
 * Usage:
 *   {{ longText | truncate:50 }}
 *   {{ longText | truncate:100:'…' }}
 */
@Pipe({
  name: 'truncate',
  standalone: true,
  pure: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 100, ellipsis = '…'): string {
    if (!value) {
      return '';
    }
    return value.length <= limit ? value : `${value.slice(0, limit)}${ellipsis}`;
  }
}
