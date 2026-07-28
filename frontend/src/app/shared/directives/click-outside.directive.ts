import {
  Directive,
  ElementRef,
  inject,
  output,
  HostListener,
} from '@angular/core';

/**
 * Click-outside directive.
 *
 * Emits an event when the user clicks outside the host element.
 *
 * Usage:
 *   <div (appClickOutside)="onClose()">...</div>
 */
@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  private readonly elementRef = inject(ElementRef);

  readonly appClickOutside = output<void>();

  @HostListener('document:click', ['$event.target'])
  onClick(target: EventTarget | null): void {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.appClickOutside.emit();
    }
  }
}
