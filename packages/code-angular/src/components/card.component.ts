import {
  Component,
  Input,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import '@uwckit/code-core';

@Component({
  selector: 'uwckit-card',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <uwc-card [attr.hoverable]="hoverable || null">
      <ng-content select="[slot=header]"></ng-content>
      <ng-content></ng-content>
      <ng-content select="[slot=footer]"></ng-content>
    </uwc-card>
  `,
})
export class UwckitCardComponent {
  @Input() hoverable = false;
}
