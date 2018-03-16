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

  constructor(
  			  Firstname: string,
  			  Lastname: string) {
  	
  	this.Firstname = Firstname;
  	this.Lastname = Lastname;
  }
  printOut(): void{
  	console.log(`Firstname=${this.Firstname}, Lastname= ${this.Lastname}`);
  }
}
let stnt : Student [] = [
	new Student ("Bob", "Evans")
];
for (let student of stnt){
	student.printOut();
}

