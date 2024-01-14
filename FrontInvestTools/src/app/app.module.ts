import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraJurosComponent } from './calculadora-juros/calculadora-juros.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultadoCalculoComponent } from './modais/resultado-calculo/resultado-calculo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    CalculadoraJurosComponent,
    ResultadoCalculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
