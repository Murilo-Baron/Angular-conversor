import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-unidades',
  templateUrl: './conversor-unidades.component.html',
  styleUrls: ['./conversor-unidades.component.css']
})
export class ConversorUnidadesComponent {

  valor: number = 0; // defina o tipo da variável como number
  unidade: string = 'cm';
  unidadeDe: string = 'kg'; // valor padrão é quilograma (kg)
  unidadePara: string = 'g'; // valor padrão é grama (g)
  resultado: number = 0;;

  constructor() {
    this.valor = 0; // Inicializa a variável novamente com o valor 0 no construtor
    this.resultado = 0; // Inicializa a variável novamente com o valor 0 no construtor
  }

  converter() {
    if (this.unidadeDe === 'kg' && this.unidadePara === 'g') {
      this.resultado = this.valor * 1000;
    } else if (this.unidadeDe === 'g' && this.unidadePara === 'kg') {
      this.resultado = this.valor / 1000;
    } else if (this.unidadeDe === 'kg' && this.unidadePara === 'lb') {
      this.resultado = this.valor * 2.20462;
    } else if (this.unidadeDe === 'lb' && this.unidadePara === 'kg') {
      this.resultado = this.valor / 2.20462;
    } else if (this.unidadeDe === 'g' && this.unidadePara === 'lb') {
      this.resultado = this.valor * 0.00220462;
    } else if (this.unidadeDe === 'lb' && this.unidadePara === 'g') {
      this.resultado = this.valor / 0.00220462;
    } else {
      this.resultado = this.valor;
    }
  }
}