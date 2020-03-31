import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlyForScreenDirective } from './directives/only-for-screen/only-for-screen.directive';
import {APP_CONFIG, WIDTH_CONFIG} from "./app.conf";

@NgModule({
  declarations: [
    AppComponent,
    OnlyForScreenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: WIDTH_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
