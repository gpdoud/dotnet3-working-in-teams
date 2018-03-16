export class Student {
  Id: number;
  Firstname: string;
  Lastname: string;
  GPA: number;
  SAT: number;
  Major: string;
  Year: string;
  Active: boolean; // added this one

  constructor() {}
}


  yourlastname(student: Student) : void{
    console.log(`The Students Last Name Is: ${this.Lastname}`)
  }
}
