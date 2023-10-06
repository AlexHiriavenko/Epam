import { Task } from "./Task.js";

export class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 1;
        this.tasks = [];
    }

    age = 1;
    tasks = [];

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setAge(newAge) {
        if (typeof newAge === "number" && isFinite(newAge) && newAge > 0) {
            this.age = newAge;
        }
    }

    addTasks(tasks) {
        tasks.forEach((task) => {
            if (task instanceof Task) {
                this.tasks.push(task);
            }
        });
    }

    getTasksCount() {
        return this.tasks.length;
    }
}
