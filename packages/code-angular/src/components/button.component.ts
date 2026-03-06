import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import type { ButtonVariant, ButtonSize } from '@uwckit/code-core';
import '@uwckit/code-core';

@Component({
  selector: 'uwckit-button',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <uwc-button
      [attr.variant]="variant"
      [attr.size]="size"
      [attr.disabled]="disabled || null"
      [attr.loading]="loading || null"
      [attr.type]="type"
      (uwc-click)="clicked.emit($event)"
    >
      <ng-content></ng-content>
    </uwc-button>
  `,
})
export class UwckitButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<Event>();
}
