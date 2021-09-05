import { Course } from './course';

export class Student{
    matriculeNumber:string
    name:string
    courses:Course[]
    GPA:number = 0
    totalCV: number = 0;
    
    constructor(matriculeNumber:string,name:string,courses:Course[]){
        this.matriculeNumber = matriculeNumber
        this.name = name
        this.courses = courses

        this.getTotalCV();
        if(this.totalCV <= 36)
            this.GPA = this.setGPA()
        else
            alert("Total credit value accepted passed")
    }

    getTotalCV(){
        let sumCV = 0;
        for(let i=0;i<this.courses.length;i++)
            sumCV += this.courses[i].credit_value
        this.totalCV = sumCV
    }

    setGPA():number{
        let sumOfCoursePoint = 0
        let sumOfCreditValue = 0
        let i = 0
        
        for(i=0;i<this.courses.length;i++){
            sumOfCoursePoint += this.courses[i].course_point
            sumOfCreditValue += this.courses[i].credit_value
        }

        return sumOfCoursePoint/sumOfCreditValue
    }
}