export class Student {
  Id: number;
  Firstname: string;
  Lastname: string;
  GPA: number;
  SAT: number;
  Major: string;
  Year: string;
  Active: boolean; 
  DateCreated: string;  //added this

  constructor() {}

  	Wesselman(firstname: string, lastname: string, major: string, year: string) {
  		this.Firstname = firstname;
  		this.Lastname = lastname;
  		this.Major = major;
  		this.Year = year;
  		console.log(`${firstname} ${lastname}, is a ${year} ${major} major `)
  	}
  	
}
