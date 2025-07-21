abstract class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

export = Person