// Import the Teacher interface and Subject class from Teacher.ts and Subject.ts
import { Subjects } from './Teacher';
import { Subject } from './Subject';

// Extend the Teacher interface using declaration merging
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    // Define the React class extending from Subject
    export class React extends Subject {
        constructor(teacher: Teacher) {
            super(teacher);
        }

        // Method to get requirements for React
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        // Method to get available teacher for React
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
