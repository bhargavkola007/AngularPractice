import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  standalone:true,
  templateUrl: './tempconvert.component.html',
  styleUrls: ['./tempconvert.component.css'],
  imports:[FormsModule]
})
export class TempconvertComponent {
  fromUnit: string = 'C';
  toUnit: string = 'C';
  temperature: number = 0;
  result: string = '';

  convert(): void {
    let convertTo: number = 0;
    let resultUnit: string = '';

    switch (this.fromUnit) {
      case 'C':
        if (this.toUnit === 'F') {
          convertTo = (this.temperature * 9/5) + 32;
          resultUnit = 'F';
        } else if (this.toUnit === 'K') {
          convertTo = this.temperature + 273.15;
          resultUnit = 'K';
        } else if (this.toUnit === 'R') {
          convertTo = (this.temperature + 273.15) * 9/5;
          resultUnit = 'R';
        } else {
          convertTo = this.temperature;
          resultUnit = 'C';
        }
        break;

      case 'F':
        if (this.toUnit === 'C') {
          convertTo = (this.temperature - 32) * 5/9;
          resultUnit = 'C';
        } else if (this.toUnit === 'K') {
          convertTo = (this.temperature - 32) * 5/9 + 273.15;
          resultUnit = 'K';
        } else if (this.toUnit === 'R') {
          convertTo = this.temperature + 459.67;
          resultUnit = 'R';
        } else {
          convertTo = this.temperature;
          resultUnit = 'F';
        }
        break;

      case 'K':
        if (this.toUnit === 'C') {
          convertTo = this.temperature - 273.15;
          resultUnit = 'C';
        } else if (this.toUnit === 'F') {
          convertTo = (this.temperature - 273.15) * 9/5 + 32;
          resultUnit = 'F';
        } else if (this.toUnit === 'R') {
          convertTo = this.temperature * 9/5;
          resultUnit = 'R';
        } else {
          convertTo = this.temperature;
          resultUnit = 'K';
        }
        break;

      case 'R':
        if (this.toUnit === 'C') {
          convertTo = (this.temperature - 491.67) * 5/9;
          resultUnit = 'C';
        } else if (this.toUnit === 'K') {
          convertTo = this.temperature * 5/9;
          resultUnit = 'K';
        } else if (this.toUnit === 'F') {
          convertTo = this.temperature - 459.67;
          resultUnit = 'F';
        } else {
          convertTo = this.temperature;
          resultUnit = 'R';
        }
        break;
    }

    this.result = convertTo.toFixed(2) + ' ' + resultUnit;
  }
}
