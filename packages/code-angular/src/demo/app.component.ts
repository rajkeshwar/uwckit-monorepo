import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>🅰️ &#64;uwckit/code-angular</h1>
      <p class="subtitle">Angular wrappers for UWCKit Lit components</p>

      <section>
        <h2>Buttons</h2>
        <div class="row">
          <uwckit-button variant="primary" (clicked)="onButtonClick('primary')">Primary</uwckit-button>
          <uwckit-button variant="secondary">Secondary</uwckit-button>
          <uwckit-button variant="danger">Danger</uwckit-button>
          <uwckit-button variant="ghost">Ghost</uwckit-button>
        </div>
        <div class="row">
          <uwckit-button [loading]="isLoading" (clicked)="toggleLoading()">
            {{ isLoading ? 'Loading...' : 'Click to Load' }}
          </uwckit-button>
          <uwckit-button [disabled]="true">Disabled</uwckit-button>
        </div>
        @if (lastClicked) {
          <p class="event-log">Last clicked: {{ lastClicked }}</p>
        }
      </section>

      <section>
        <h2>Badges</h2>
        <div class="row">
          <uwckit-badge variant="default">Default</uwckit-badge>
          <uwckit-badge variant="success" [dot]="true">Success</uwckit-badge>
          <uwckit-badge variant="warning" [dot]="true">Warning</uwckit-badge>
          <uwckit-badge variant="error" [dot]="true">Error</uwckit-badge>
          <uwckit-badge variant="info" [dot]="true">Info</uwckit-badge>
        </div>
      </section>

      <section>
        <h2>Cards</h2>
        <div class="grid">
          <uwckit-card [hoverable]="true">
            <span slot="header">Angular Card</span>
            Card body content managed by Angular. Hoverable on desktop.
            <div slot="footer">
              <uwckit-button size="sm">Footer Action</uwckit-button>
            </div>
          </uwckit-card>
          <uwckit-card>
            <span slot="header">Status Card</span>
            <uwckit-badge variant="success" [dot]="true">Active</uwckit-badge>
            <p style="margin-top:0.5rem">System status is nominal.</p>
          </uwckit-card>
        </div>
      </section>

      <section>
        <h2>Input (with ngModel)</h2>
        <div class="form">
          <uwckit-input
            label="Username"
            placeholder="Enter username"
            hint="Powered by ControlValueAccessor"
            [(ngModel)]="username"
            name="username"
          ></uwckit-input>
          <p>Value: <strong>{{ username }}</strong></p>
        </div>
      </section>
    </div>
  `,
})
export class AppComponent {
  isLoading = false;
  lastClicked = '';
  username = '';

  onButtonClick(label: string) {
    this.lastClicked = label;
  }

  toggleLoading() {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 2000);
  }
}
