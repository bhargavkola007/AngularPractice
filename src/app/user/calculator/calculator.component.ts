import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  standalone:true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  imports:[FormsModule]
})
export class CalculatorComponent {
  displayValue: string = '';

  addToDisplay(value: string): void {
    this.displayValue += value;
  }

  calculate(): void {
    try {
      // Use Function constructor to evaluate the expression safely
      this.displayValue = this.evaluateExpression(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  clearDisplay(): void {
    this.displayValue = '';
  }

  evaluateExpression(expression: string): string {
    // Regular expression to allow only numbers, +, -, *, /, and . in the expression
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    return new Function('return ' + sanitizedExpression)().toString();
  }
}
