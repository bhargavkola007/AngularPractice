import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserLoginService } from '../user.service';

interface UserRegistration {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class RegistrationComponent {
  id: number = 0;
  name: string = '';
  email: string = '';
  password: string = '';
  isRegistered = false;

  constructor(private userService: UserLoginService) {}

  onSubmit() {
    const user: UserRegistration = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.userService.registerUser(user).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.isRegistered = true;
      },
      error: (error) => {
        console.error('Registration failed:', error);
      }
    });
  }
}