import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { tipoPeriodo } from '../Enums/tipo-periodo';
import { mes } from '../Enums/mes';

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
      valor: ['', Validators.required],
      tipoPeriodo: [tipoPeriodo.mes, Validators.required]
    }),
    juros: this.formBuilder.group({
      valor: ['', Validators.required],
      tipoPeriodo: [tipoPeriodo.mes, Validators.required]
    }),
    aportes: this.formBuilder.array([
      this.formBuilder.group({
        valor: ['', Validators.required],
        mes: [mes.todos, Validators.required]
      })
    ])
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.warn(this.form.value);
  }

  get aportes() {
    return this.form.get('aportes') as FormArray;
  }

  addAportes() {
    this.aportes.push(this.formBuilder.group({
      valor: ['', Validators.required],
      mes: [mes.todos, Validators.required]
    }));
  }

  removeAportes(index: number) {
    this.aportes.removeAt(index);
  }
}
