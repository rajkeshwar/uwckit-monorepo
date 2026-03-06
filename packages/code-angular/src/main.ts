import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './demo/app.component';
import { FormsModule } from '@angular/forms';
import {
    UwckitButtonComponent,
    UwckitBadgeComponent,
    UwckitCardComponent,
    UwckitInputComponent,
} from './index';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        UwckitButtonComponent,           // standalone — goes in imports
        UwckitBadgeComponent,
        UwckitCardComponent,
        UwckitInputComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));

