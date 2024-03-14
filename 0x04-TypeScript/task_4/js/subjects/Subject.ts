// Import the Teacher interface from Teacher.ts
import { Subjects } from './Teacher';

// Define the namespace Subjects
namespace Subjects {
    // Define the Subject class
    export class Subject {
        private _teacher: Teacher;

        // Constructor
        constructor(teacher: Teacher) {
            this._teacher = teacher;
        }

        // Setter method to set the teacher
        setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }
    }
}
