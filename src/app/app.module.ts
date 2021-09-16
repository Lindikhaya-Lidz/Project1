import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ PickerModule }from '@ctrl/ngx-emoji-mart';
import{ FormsModule}from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntriesComponent } from './entries/entries.component';
import { RecordedDiaryComponent } from './recorded-diary/recorded-diary.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    RecordedDiaryComponent
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
