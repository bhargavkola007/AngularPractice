import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './register/register.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ServicesComponent } from './services/services.component';
import { CalculatorComponent } from './user/calculator/calculator.component';
import { TempconvertComponent } from './user/tempconvert/tempconvert.component';
import { StudentListComponent } from './students/students.component';

export const routes: Routes = [
  // Default route redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // Main routes
  { path: 'home', component: HomeComponent },
  { path: 'addition', component: AdditionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'temp', component: TempconvertComponent },
  {path:'students',component:StudentListComponent},
  
  // Wildcard route - should always be last
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];