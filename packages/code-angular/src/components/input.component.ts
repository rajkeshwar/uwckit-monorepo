import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import '@uwckit/code-core';

@Component({
  selector: 'uwckit-input',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UwckitInputComponent),
      multi: true,
    },
  ],
  template: `
    <uwc-input
      [attr.label]="label || null"
      [attr.value]="value"
      [attr.placeholder]="placeholder || null"
      [attr.type]="type"
      [attr.hint]="hint || null"
      [attr.error]="error || null"
      [attr.disabled]="disabled || null"
      [attr.required]="required || null"
      [attr.name]="name || null"
      (uwc-input)="onInput($event)"
      (uwc-change)="onChange($event)"
    ></uwc-input>
  `,
})
export class UwckitInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() value = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() hint = '';
  @Input() error = '';
  @Input() disabled = false;
  @Input() required = false;
  @Input() name = '';

  @Output() uwcInput = new EventEmitter<string>();
  @Output() uwcChange = new EventEmitter<string>();

  private _onChange: (value: string) => void = () => {};
  private _onTouched: () => void = () => {};

  onInput(e: CustomEvent) {
    this.value = e.detail?.value ?? '';
    this._onChange(this.value);
    this.uwcInput.emit(this.value);
  }

  onChange(e: CustomEvent) {
    this._onTouched();
    this.uwcChange.emit(e.detail?.value ?? '');
  }

  // ControlValueAccessor
  writeValue(val: string): void { this.value = val ?? ''; }
  registerOnChange(fn: (v: string) => void): void { this._onChange = fn; }
  registerOnTouched(fn: () => void): void { this._onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
