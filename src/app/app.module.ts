import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//双方向データバインディングに必要
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CalcComponent]
})
export class AppModule { }
