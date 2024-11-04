import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      { id: 1, name: 'Bhargav',email:'bhargav@gmail.com', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Chandu',email:'chandu@gmail.com', age: 22, course: 'Information Technology' },
    { id: 3, name: 'Ramu', email:'ramu@gmail.com',age: 19, course: 'Mathematics' },
    { id: 4, name: 'Gopal',email:'gopal@gmail.com', age: 21, course: 'Physics' },
    { id: 5, name: 'Chitti',email:'chitti@gmail.com', age: 23, course: 'Chemistry' },
    { id: 6, name: 'Bhavani',email:'bhavani@gmail.com', age: 20, course: 'Biology' },
    { id: 7, name: 'Prasad',email:'prasad@gmail.com', age: 22, course: 'Literature' },
    { id: 8, name: 'Gautham',email:'gautam@gmail.com', age: 21, course: 'History' },
    { id: 9, name: 'Vani',email:'vani@gmail.com', age: 20, course: 'Engineering' },
    { id: 10, name: 'Geetha',email:'geeta@gmail.com', age: 24, course: 'Economics' },
    ];
  }
}
