import { Component, OnInit,Input } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() selectedStudent: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }
  
  getStudent(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.studentService.getStudent(String(name))
      .subscribe(student => this.selectedStudent = student);
  }

  goBack(): void {
    this.location.back();
  }

}

