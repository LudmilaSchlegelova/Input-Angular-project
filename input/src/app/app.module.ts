import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Input1Component } from './input1/input1.component';
import { Input2Component } from './input2/input2.component';
import { ClickElsewhereDirective } from './click-elsewhere.directive';

@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    Input2Component,
    ClickElsewhereDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
