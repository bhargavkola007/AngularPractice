import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
  navigatetologin(){
    this.router.navigate(['/login'])
  }
  navigatetoregister(){
    this.router.navigate(['/register'])
  }
  navigateToservice(){
    this.router.navigate(['/user-list'])
  }
}
