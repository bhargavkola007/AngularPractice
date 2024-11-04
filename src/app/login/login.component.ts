import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { UserLoginService } from '../user.service';

interface LoginRequest {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoginSuccess: boolean = false;
  errorMessage: string = '';

  constructor(
    private userService: UserLoginService,
    private router: Router
  ) {}

  onSubmit() {
    const loginRequest: LoginRequest = {
      email: this.email,
      password: this.password
    };

    this.userService.login(loginRequest).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.isLoginSuccess = true;
        // Store the token in localStorage
        localStorage.setItem('token', response.token);
        // Navigate to dashboard or home page after successful login
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.isLoginSuccess = false;
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}