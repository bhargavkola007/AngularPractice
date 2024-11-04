import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { StudentService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule], // Include ReactiveFormsModule
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentListComponent implements OnInit {

  students: any[] = [];
  studentForm: FormGroup; // FormGroup for managing the form
  isEditing: boolean = false; // Flag to check if we are in edit mode
  currentStudentId: number | null = null; // To keep track of the current student ID

  constructor(private studentService: StudentService, private fb: FormBuilder) {
    this.studentForm = this.fb.group({ // Initialize the form
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getAllStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching student data', error);
      }
    );
  }

  saveStudent() {
    if (this.isEditing) {
      this.updateStudent();
    } else {
      this.createStudent();
    }
  }

  createStudent() {
    this.studentService.createStudent(this.studentForm.value).subscribe(
      (newStudent) => {
        this.students.push(newStudent);
        this.studentForm.reset();
      },
      (error) => {
        console.error('Error creating student', error);
      }
    );
  }

  updateStudent() {
    if (this.currentStudentId !== null) {
      this.studentService.updateStudent(this.currentStudentId, this.studentForm.value).subscribe(
        (updatedStudent) => {
          const index = this.students.findIndex(student => student.id === this.currentStudentId);
          if (index !== -1) {
            this.students[index] = updatedStudent;
          }
          this.isEditing = false;
          this.studentForm.reset();
          this.currentStudentId = null;
        },
        (error) => {
          console.error('Error updating student', error);
        }
      );
    }
  }

  editStudent(student: any) {
    this.isEditing = true;
    this.currentStudentId = student.id;
    this.studentForm.patchValue({
      username: student.username,
      password: student.password
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      () => {
        this.students = this.students.filter(student => student.id !== id);
      },
      (error) => {
        console.error('Error deleting student', error);
      }
    );
  }
}