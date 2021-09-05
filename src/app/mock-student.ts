import { Student } from './student';
import {Course} from './course'


const courseOne:Course[]  = [new Course("CSC 403",6,34),new Course("CSC 203",6,56),new Course("CSC 301",6,66)]
const courseTwo:Course[]  = [new Course("CSC 405",6,67),new Course("CSC 205",6,67),new Course("CSC 303",6,86)]
const courseThree:Course[]  = [new Course("CSC 407",6,78),new Course("CSC 207",6,79),new Course("CSC 305",6,89),new Course("CSC 207",6,79),new Course("CSC 207",6,79)]
const courseFour:Course[]  = [new Course("CSC 413",6,64),new Course("CSC 211",6,90),new Course("CSC 311",6,67)]
const courseFive:Course[]  = [new Course("CSC 409",6,23),new Course("CSC 209",6,67),new Course("MAT 203",6,56)]

export const STUDENTS: Student[]=[
    new Student("SC18B141","Tagni Dilano",courseOne),
    new Student("SC18B142","James Stevens",courseTwo),
    new Student("SC18B143","Che John",courseThree),
    new Student("SC18B144","Bradley Pit",courseFive),
    new Student("SC18B145","Ngwa Ernest",courseFour)
]