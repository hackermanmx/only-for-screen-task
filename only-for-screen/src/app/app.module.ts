import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlyForScreenDirective } from './directives/only-for-screen/only-for-screen.directive';
import { OnResizeDirective } from './directives/on-resize/on-resize.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyForScreenDirective,
    OnResizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
