import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertSuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertSuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
