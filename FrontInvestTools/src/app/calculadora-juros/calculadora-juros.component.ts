import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora-juros',
  templateUrl: './calculadora-juros.component.html',
  styleUrl: './calculadora-juros.component.scss'
})
export class CalculadoraJurosComponent {
  form = new FormGroup({
    inicial: new FormControl(0.00),
    aporte: new FormControl('',Validators.required),
    periodo: new FormControl('',Validators.required),
    tipoPeriodoPeriodo: new FormControl('1',Validators.required),
    juros: new FormControl('',Validators.required),
    tipoPeriodoJuros: new FormControl('1',Validators.required),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }
}
