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

  robinson(id: number, firstname: string, lastname: string) {
		
		console.log("Id: ", this.Id, "Firstname: ", this.Firstname, "Lastname: ", this.Lastname);

	}
}