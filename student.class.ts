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


  public Baugus() : void  {
    console.log(`Baugus Function called
Id: ${this.Id}, Name: ${this.Firstname} ${this.Lastname}
GPA: ${this.GPA}, SAT: ${this.SAT}
Major: ${this.Major}, Year: ${this.Year}
Active: ${this.Active}, Date Created: ${this.DateCreated}`);
}

  public Bruce(): void{
    console.log(`${this.Firstname} ${this.Lastname} is a ${this.Year} ${this.Major} major `);
  }
}

