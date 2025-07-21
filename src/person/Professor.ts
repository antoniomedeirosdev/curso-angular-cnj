import Person from "./Person";

class Professor extends Person {
  subjects: string[];

  constructor(firstName: string, lastName: string, subjects: string[]) {
    super(firstName, lastName);
    this.subjects = subjects;
  }
}

export = Professor;
