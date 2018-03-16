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

}

  Bruce(firstName: string, lastName: string, major: string, year: string){
    this.Firstname = firstName;
    this.Lastname = lastName;
    this.Major = major;
    this.Year = year;
    console.log(`${firstName} ${lastName} is a ${year} ${major} major `)
  }
}

