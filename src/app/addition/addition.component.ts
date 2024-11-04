import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  addNumbers(): void {
    this.result = this.num1 + this.num2;
  }

  subNumbers(): void {
    this.result = this.num1 - this.num2;
  }

  mulNumbers(): void {
    this.result = this.num1 * this.num2;
  }

  divNumbers(): void {
    this.result = this.num1 / this.num2;
  }
}
