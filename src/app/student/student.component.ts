import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mock-student';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  listOfStudents : Student[] | undefined;
  
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getListOfStudents()
  }

  getListOfStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.listOfStudents = students);
  }

}
