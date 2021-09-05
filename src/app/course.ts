export class Course{
    course_code:string;
    credit_value:number;
    score_on_100:number;
    let_grade:string = 'X'
    grade_point:number = 0.0
    course_point:number = 0.0


    constructor(course_code:string,credit_value:number,score_on_100:number){
            this.course_code = course_code
            if(credit_value > 6 && credit_value > 0)
                this.credit_value = 0
            else    
                this.credit_value = credit_value
            this.score_on_100 = score_on_100

            this.setGradeLetter()
            this.setGradePoint()
            this.course_point = (this.credit_value * this.grade_point)
    }

    setGradeLetter(){
        if(this.score_on_100<=100 && this.score_on_100>=80)
            this.let_grade  = "A"
        if(this.score_on_100<=79 && this.score_on_100>=70)
            this.let_grade  = "B+"
        if(this.score_on_100<=69 && this.score_on_100>=60)
            this.let_grade  = "B" 
        if(this.score_on_100<=59 && this.score_on_100>=55)
            this.let_grade  = "C+"
        if(this.score_on_100<=54 && this.score_on_100>=50)
            this.let_grade  = "C"
        if(this.score_on_100<=49 && this.score_on_100>=45)
            this.let_grade  = "D+"
        if(this.score_on_100<=44 && this.score_on_100>=40)
            this.let_grade  = "D"    
        if(this.score_on_100<=39 && this.score_on_100>=0)
            this.let_grade  = "F"
    }

    setGradePoint(){
        switch(this.let_grade){
            case "A":
                this.grade_point = 4.0
                break;
            case "B+":
                this.grade_point = 3.5
                break;
            case "B":
                this.grade_point = 3.0
                break;
            case "C+":
                this.grade_point = 2.5
                break;
            case "C":
                this.grade_point = 2.0
                break; 
            case "D+":
                this.grade_point = 1.5
                break;
            case "D":
                this.grade_point = 1.0
                break; 
            case "F":
                this.grade_point = 0.0
                break;          
        }

    }





}