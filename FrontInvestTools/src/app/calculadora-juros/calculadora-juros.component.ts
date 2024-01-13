import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { TipoPeriodo } from '../Enums/tipo-periodo';
import { Mes } from '../Enums/mes';
import { CalculadoraJurosService } from './calculadora-juros.service';
import { CalcularResponse } from '../Interfaces/calcular-response.interface';
import { Aporte } from '../Interfaces/aporte.interface';
import { CalcularRequest } from '../Interfaces/calcular-request.interface';
import { Juros } from '../Interfaces/juros.interface';
import { Periodo } from '../Interfaces/periodo.interface';

@Component({
  selector: 'app-calculadora-juros',
  templateUrl: './calculadora-juros.component.html',
  styleUrls: ['./calculadora-juros.component.scss']
})

export class CalculadoraJurosComponent {

  calculoResponse: CalcularResponse | undefined;

  aportes: Aporte[] = [];

  meses = [
    { valor: 0,  nome: 'Mensal' },
    { valor: 1,  nome: 'Janeiro' },
    { valor: 2,  nome: 'Fevereiro' },
    { valor: 3,  nome: 'Março' },
    { valor: 4,  nome: 'Abril' },
    { valor: 5,  nome: 'Maio' },
    { valor: 6,  nome: 'Junho' },
    { valor: 7,  nome: 'Julho' },
    { valor: 8,  nome: 'Agosto' },
    { valor: 9,  nome: 'Setembro' },
    { valor: 10, nome:  'Outubro' },
    { valor: 11, nome:  'Novembro' },
    { valor: 12, nome:  'Dezembro' }
  ];

  form = this.formBuilder.group({
    inicial: [0, Validators.required],
    periodo: this.formBuilder.group({
      valor: [ 0, Validators.required],
      tipoPeriodo: [TipoPeriodo.mensal, Validators.required]
    }),
    juros: this.formBuilder.group({
      valor: [0, Validators.required],
      tipoPeriodo: [TipoPeriodo.mensal, Validators.required]
    }),
    aporte: this.formBuilder.group({
      valor: [0, Validators.required],
      mes: [Mes.mensal, Validators.required]
    })
  });


  constructor(private formBuilder: FormBuilder,  private calculadoraJurosService: CalculadoraJurosService) { }

  calcular() {

    const request: CalcularRequest = 
    { 
      Aportes: this.aportes,
      Periodo: this.form.get('periodo')?.value,
      Juros: this.form.get('juros')?.value
    };

    this.calculadoraJurosService
    .postCalcular(request).subscribe(    
    response => {
      console.log('Resposta da API:', response);
      this.calculoResponse = response;
    },
    error => {
      console.error('Erro ao chamar a API:', error);
    });
  }

  addAporte() {
    console.log(this.form.get('aporte')?.value);
    let aporte: Aporte = {
      valor: this.form.get('aporte')?.value.valor ?? 0,
      mes:  this.form.get('aporte')?.value.mes ?? Mes.mensal
    };
    this.aportes.push(aporte);
  }

  removeAporte(index: number) {
    this.aportes.splice(index, 1);
  }

  getNomeMes(valor: number) : string{
    return this.meses.find(mes => mes.valor === valor)?.nome ?? "";
  }
}
