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

  	Wesselman(firstname: string) {  		
  		console.log(`My student's first name is ${firstname}.`)
  	}
  	
}