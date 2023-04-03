import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Encabezado1Component } from './encabezado1/encabezado1.component';
import { Encabezado2Component } from './encabezado2/encabezado2.component';
import { Encabezado3Component } from './encabezado3/encabezado3.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { InformacionComponent } from './informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    Encabezado1Component,
    Encabezado2Component,
    Encabezado3Component,
    CuerpoComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
