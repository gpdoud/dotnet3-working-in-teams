export class Student{
	Id: number;
	Firstname: string;
	Lastname: string; 
	GPA: number;
	SAT: number; //added this 
	Major: string;
	Year: string;
	Active: boolean; //added this one
	DateCreated: string; 

	constructor(id: number, firstname: string, lastname: string, gpa: number, sat: number, major: string, year: string, active: boolean){
		this.Id = id;
		this.Firstname = firstname;
		this.Lastname = lastname;
		this.GPA = gpa;
		this.SAT= sat;
		this.Major= major;
		this.Year= year;
		this.Active = active;

	}

	printOut(): void {
		console.log(`id=${this.Id}, firstname=${this.Firstsname},lastname=${this.Lastname},gpa=${this.GPA}, sat=${this.SAT}, major=${this.Major},
		 year=${this.Year}, active=${this.Active}`);
	}
}

let custs: Student[] = [
	new Student(1, "Christina", "Fox", 3.9, 1240, "Business", "Senior", True,)
	];

for(let student of stud) {
	student.printOut();
}
