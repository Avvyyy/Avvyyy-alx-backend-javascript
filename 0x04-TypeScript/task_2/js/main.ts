//DirectorInterface with 3 methods

interface DirectorInterface {
	workFromHome(): string,
	getToWork(): string,
	workDirectorTasks(): string
}

//TeacherInterface with 3 methods

interface TeacherInterface {
	workFromHome(): string
	getCoffeeBreak(): string
	workTeacherTasks(): string
}

//Director class that implements DirectorInterface
class Director implements DirectorInterface {

	public workFromHome(): string {
			return "Working from home";
	}

	public getToWork(): string {
		return "Getting a coffee break";
	}

	public workDirectorTasks(): string {
			return "Getting to director tasks";
	}
}

//Class Teacher that implements TeacherInterface

class Teacher implements TeacherInterface {

	public workFromHome(): string {
			return "Cannot work from home";
	}

	public getCoffeeBreak(): string {
			return "Cannot have a break";
	}

	public workTeacherTasks(): string {
			return "Getting to work";
	}
}

function createEmployee (salary: string | number) : Director | Teacher {
	if(typeof(salary) === "number" && salary < 500) {
		return new Teacher();
	}
	else{
		return new Director();
	}
}

// Define string literal type
type Subjects = "Math" | "History";

// Function to teach a class
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    } else {
        throw new Error("Invalid class specified");
    }
}

// Test the function
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History

