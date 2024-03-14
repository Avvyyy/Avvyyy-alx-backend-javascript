// Import the Teacher interface and Subject class from Teacher.ts and Subject.ts
import { Subjects } from './Teacher';
import { Subject } from './Subject';

// Extend the Teacher interface using declaration merging
namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    // Define the Java class extending from Subject
    export class Java extends Subject {
        constructor(teacher: Teacher) {
            super(teacher);
        }

        // Method to get requirements for Java
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        // Method to get available teacher for Java
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
