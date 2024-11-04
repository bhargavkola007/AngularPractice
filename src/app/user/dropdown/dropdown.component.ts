
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  selectedOption: string = ''; 
  options: string[] = ['Java', 'Python', 'C++', 'Spring']; 

  showSubjects: boolean = false;
  message: string = '';
  attempt: string = '';
  count: number = 0;
  maxAttempts: number = 3; 
  username: string = '';
  password: string = '';
  number1: number = 0;
  number2: number = 0;

 
  students: Student[] = [
    { id: 1, name: 'Bhargav', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Chandu', age: 22, course: 'Information Technology' },
    { id: 3, name: 'Ramu', age: 19, course: 'Mathematics' },
    { id: 4, name: 'Gopal', age: 21, course: 'Physics' },
    { id: 5, name: 'Chitti', age: 23, course: 'Chemistry' },
    { id: 6, name: 'Bhavani', age: 20, course: 'Biology' },
    { id: 7, name: 'Prasad', age: 22, course: 'Literature' },
    { id: 8, name: 'Gautham', age: 21, course: 'History' },
    { id: 9, name: 'Vani', age: 20, course: 'Engineering' },
    { id: 10, name: 'Geetha', age: 24, course: 'Economics' },
  ];

  enteredId: number | null = null; 
  studentDetails: Student | undefined; 

  onclick() {
    if (this.count < this.maxAttempts - 1) { 
      this.count++;
      const attemptsLeft = this.maxAttempts - this.count;
      this.message = "You have entered wrong credentials";
      this.attempt = `You have ${attemptsLeft} attempts left`;
    } else {
      this.onclicked();
    }
  }

  onclicked() {
    this.message = "Try again, you have crossed your limit";
    this.attempt = ''; 
  }

  handleLogin() {
    if (this.count < this.maxAttempts) {
      if (this.username === 'Bhargav' && this.password === '12345') {
        this.message = "Login successful!";
        this.count = 0; 
        this.attempt = ''; 
      } else {
        this.onclick();
      }
    }
  }

  isDisabled(): boolean {
    return this.number1 === 0 && this.number2 === 0;
  }

  getStudentById() {
    this.studentDetails = this.students.find(student => student.id === this.enteredId!) || undefined;
  }
  showSubject = true;

}
