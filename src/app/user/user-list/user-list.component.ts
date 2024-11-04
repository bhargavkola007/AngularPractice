import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { UserService } from '../../user-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [FormsModule,CommonModule] 
})
export class UserListComponent {
  // name: string = 'Bhargav';
  // number: string = '140';  
  // github: string = 'https://github.com/bhargavkola007/bhargavkola007'; 
  // place:string='';
  // message: string = '';

  // showMessage() {
  //   this.message = 'Hello, ' + this.name + '\n! Your details are:\nName : '+this.name+'     Number : '+this.number+'    Place : '+this.place;
  // }
  // displayMessage() {
  //   this.message= ("Python");
  // }
  users: any[] = [];

  constructor(private userService:UserService) {
    this.showusers();
  }

  showusers(){
    this.users = this.userService.getUsers(); 
  }
}


