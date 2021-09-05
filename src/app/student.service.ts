import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-student';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = 'api/STUDENTS';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  /** GET students from the server */
  getStudents(): Observable<Student[]> {
    this.messageService.add('studentService: fetched student');

    return this.http.get<Student[]>(this.studentUrl)
    .pipe(
      catchError(this.handleError<Student[]>('getStudents',[]))
    );
  }

  getStudent(name:string): Observable<Student | undefined> {
    return of(STUDENTS.find(student => student.name === name));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      console.error(error);
  
      return of(result as T);
    };
  }

}
