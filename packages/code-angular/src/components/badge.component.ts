import {
  Component,
  Input,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import type { BadgeVariant } from '@uwckit/code-core';
import '@uwckit/code-core';

@Component({
  selector: 'uwckit-badge',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <uwc-badge
      [attr.variant]="variant"
      [attr.dot]="dot || null"
    >
      <ng-content></ng-content>
    </uwc-badge>
  `,
})
export class UwckitBadgeComponent {
  @Input() variant: BadgeVariant = 'default';
  @Input() dot = false;
}
