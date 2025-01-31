function greeter(person: string): string {
  return "Hello, " + person;
}

function greetArray(people: string[]): string {
  return people.map(person => greeter(person)).join(", ");
}

let user = ["Jane", "Doe"];
console.log(greetArray(user)); // Output: Hello, Jane, Hello, Doe