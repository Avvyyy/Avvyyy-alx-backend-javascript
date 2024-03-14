// Interfaces and classes
export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

export interface Director extends Teacher {
	numberOfReports: number;
}

export interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

export class StudentClass implements iStudent {
	public firstName: string;
	public lastName: string;

	public constructor(firstName: string, lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
	}

	public workOnHomework(): string {
			return "Currently Working";
	}

	public displayName(): string {
			return this.firstName;
	}
}

export interface iStudent {
	firstName: string,
	lastName: string,
	workOnHomework(): string,
	displayName(): string
}

// Functions
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName[0]}. ${lastName}`;
};

export function isDirector(employee: Teacher | Director): employee is Director {
	return 'numberOfReports' in employee;
}

function workDirectorTasks(): string {
	return "Director is working on director tasks.";
}

function workTeacherTasks(): string {
	return "Teacher is working on teaching tasks.";
}

export function executeWork(employee: Teacher | Director): string {
	if (isDirector(employee)) {
			return workDirectorTasks();
	} else {
			return workTeacherTasks();
	}
}
