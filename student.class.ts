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
  Tang(): void {
	console.log(`Chris Tang`)
  }
constructor () {}
}