export class Student {
  Id: number;
  Firstname: string;
  Lastname: string;
  GPA: number;
  SAT: number;
  Major: string;
  Year: string;
  Active: boolean; // added this one
  DateCreated: string;

  constructor() {}

  public Bruce(): void{
    
    console.log(`${this.Firstname} ${this.Lastname} is a ${this.Year} ${this.Major} major `);
  }
}
