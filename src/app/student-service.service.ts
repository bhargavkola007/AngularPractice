import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/students'; 

  constructor(private http: HttpClient) { }

  // Get all students
  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Create a new student
  createStudent(studentData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, studentData);
  }

  // Update an existing student
  updateStudent(id: number, studentData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, studentData);
  }

  // Delete a student
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
