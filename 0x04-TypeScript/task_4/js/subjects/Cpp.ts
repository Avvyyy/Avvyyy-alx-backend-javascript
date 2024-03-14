// Import the Teacher interface and Subject class from Teacher.ts and Subject.ts
import { Subjects } from './Teacher';
import { Subject } from './Subject';

// Extend the Teacher interface using declaration merging
namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    // Define the Cpp class extending from Subject
    export class Cpp extends Subject {
        constructor(teacher: Teacher) {
            super(teacher);
        }

        // Method to get requirements for Cpp
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        // Method to get available teacher for Cpp
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
