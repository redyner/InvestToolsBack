import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { TipoPeriodo } from '../Enums/tipo-periodo';
import { Mes } from '../Enums/mes';
import { CalculadoraJurosService } from './calculadora-juros.service';

@Component({
  selector: 'app-calculadora-juros',
  templateUrl: './calculadora-juros.component.html',
  styleUrls: ['./calculadora-juros.component.scss']
})

export class CalculadoraJurosComponent {

  meses = [
    { value: 0, name: 'Todos' },
    { value: 1, name: 'Janeiro' },
    { value: 2, name: 'Fevereiro' },
    { value: 3, name: 'Março' },
    { value: 4, name: 'Abril' },
    { value: 5, name: 'Maio' },
    { value: 6, name: 'Junho' },
    { value: 7, name: 'Julho' },
    { value: 8, name: 'Agosto' },
    { value: 9, name: 'Setembro' },
    { value: 10, name: 'Outubro' },
    { value: 11, name: 'Novembro' },
    { value: 12, name: 'Dezembro' }
  ];

  form = this.formBuilder.group({
    inicial: [0],
    periodo: this.formBuilder.group({
      valor: [0, Validators.required],
      tipoPeriodo: [TipoPeriodo.mensal, Validators.required]
    }),
    juros: this.formBuilder.group({
      valor: [0, Validators.required],
      tipoPeriodo: [TipoPeriodo.mensal, Validators.required]
    }),
    aportes: this.formBuilder.array([
      this.formBuilder.group({
        valor: [0, Validators.required],
        mes: [Mes.todos, Validators.required]
      })
    ])
  });


  constructor(private formBuilder: FormBuilder,  private calculadoraJurosService: CalculadoraJurosService) { }

  calcular() {

    this.calculadoraJurosService
    .postCalcular(this.form.value).subscribe(    
    response => {
      console.log('Resposta da API:', response);
    },
    error => {
      console.error('Erro ao chamar a API:', error);
    });
  }

  get aportes() {
    return this.form.get('aportes') as FormArray;
  }

  addAporte() {
    this.aportes.push(this.formBuilder.group({
      valor: ['', Validators.required],
      mes: [Mes.todos, Validators.required]
    }));
  }

  removeAporte(index: number) {
    this.aportes.removeAt(index);
  }
}
