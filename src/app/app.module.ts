import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ PickerModule }from '@ctrl/ngx-emoji-mart';
import{ FormsModule}from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntriesComponent } from './entries/entries.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent
  ],
  imports: [
    BrowserModule,
    PickerModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
