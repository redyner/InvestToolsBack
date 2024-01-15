import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraJurosComponent } from './calculadora-juros/calculadora-juros.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultadoCalculoComponent } from './modais/resultado-calculo/resultado-calculo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';

registerLocaleData(localPt, 'pt-BR');

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
    MatDialogModule,
    MatIconModule,
    NgChartsModule
  ],
  providers: [
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
